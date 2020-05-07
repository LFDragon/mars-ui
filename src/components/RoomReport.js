import React, { Component } from 'react';
import moment from 'moment';
import { Select, Row, DatePicker, Alert, Button } from 'antd';
import { connect } from 'dva';
import StatisCard from './StatisCard';
import TimeLine from './TimeLine';
import myStyle from '../css/RoomReport.less';

const { Option } = Select;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const namespace = 'roomreport';

const wrapper = {
    marginTop: '10px',
    display: 'flex'
};
const wrapperDetail = {
    width: '100%'
};

const mapStateToProps = (state) => {
    const reportData = state[namespace];
    return {
        reportData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        queryReport: (params) => {
            dispatch({
                type: `${namespace}/queryRoomReport`,
                payload: params,
            });
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class RoomReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePicker: "byDay",
            startTime: '',
            endTime: '',
        };
        this.queryRangeType = "byDay";
        this.queryDate = moment().locale('zh-cn');
        this.queryFromDate = moment().startOf('month').format('YYYY-MM-DD');
        this.queryToDate = moment().endOf('month').format('YYYY-MM-DD');
        this.cusFromDate = null;
        this.cusToDate = null;
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onRangeTypeChange = this.onRangeTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onFromRangeChange = this.onFromRangeChange.bind(this);
        this.onToRangeChange = this.onToRangeChange.bind(this);
        this.triggerSearch = this.triggerSearch.bind(this);
    }

    onRoomChange(value) {
        this.queryRoom = value;
    }

    onRangeTypeChange(value) {
        this.setState({datePicker: value});
    }

    onDateChange(date, dateString) {
        this.queryDate = date;
    }

    onMonthChange(date, dateString) {
        this.queryFromDate = date ? date.startOf('month').format('YYYY-MM-DD') : null;
        this.queryToDate = date ? date.endOf('month').format('YYYY-MM-DD') : null;
    }

    onFromRangeChange(date, dateString) {
        this.setState({startTime: dateString});
    }

    onToRangeChange(date, dateString) {
        this.setState({endTime: dateString});
    }

    handleEndDisabledDate = (current) => {
        const { startTime } = this.state;
        if (startTime !== '') {
            return current > moment(startTime).add(30, 'day') || current < moment(startTime);
        } else {
            return null;
        }
    }

    handleStartDisabledDate = (current) => {
        const { endTime } = this.state;
        if (endTime !== '') {
            return current < moment(endTime).subtract(30, 'day') || current > moment(endTime);
        } else {
            return null;
        }
    }

    triggerSearch() {
        this.queryRangeType = this.state.datePicker;

        var queryString = "?";
        switch(this.queryRangeType) {
            case "byDay":
                if (!this.queryDate) return alert('Please select date.');
                const queryDate = this.queryDate.format('YYYY-MM-DD');
                queryString += `fromDate=${queryDate}&toDate=${queryDate}`;
                break;
            case "byMonth":
                if (!this.queryFromDate) return alert('Please select month.');
                queryString += `fromDate=${this.queryFromDate}&toDate=${this.queryToDate}`;
                break;
            case "custom":
                this.cusFromDate = this.state.startTime;
                this.cusToDate = this.state.endTime;
                if (!this.cusFromDate) return alert('Please select start date.');
                if (!this.cusToDate) return alert('Please select end date.');
                queryString += `fromDate=${this.cusFromDate}&toDate=${this.cusToDate}`;
                break;
        }
        
        var roomData = this.props.roomList;
        if (!roomData[this.queryRoom]) return alert('Please select room.');
        var roomId = roomData[this.queryRoom].room.id

        this.props.queryReport([roomId, queryString]);
    }

    render() {
        var data = null;
        if (this.props.reportData.data.length > 0) {
            for (let item of this.props.reportData.data) {
                if (item.room.name == this.queryRoom) {
                    data = item;
                    break;
                }
            }
        }
        return (
            <div style={{ padding: '20px 10px 0px 10px', borderTop: '1px solid lightgrey' }}>
                <Row gutter={16}>
                    <Select
                        showSearch
                        className={myStyle['mySelect']}
                        optionFilterProp="children"
                        placeholder="Select a room"
                        onChange={this.onRoomChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {   
                            Object.keys(this.props.roomList).sort().map((val, idx) => {
                                return <Option value={val}>{val}</Option>
                            })
                        }
                    </Select>
                    <Select defaultValue={this.state.datePicker} className={myStyle['mySelect']} onChange={this.onRangeTypeChange}>
                        <Option value="byDay">By Day</Option>
                        <Option value="byMonth">By Month</Option>
                        <Option value="custom">Custom Range</Option>
                    </Select>
                    <DatePicker 
                        className={myStyle['mySelect']} 
                        style={{display: this.state.datePicker=="byDay" ? "inline-block" : "none"}}
                        onChange={this.onDateChange}
                        defaultValue={this.queryDate}/>
                    <MonthPicker 
                        className={myStyle['mySelect']} 
                        style={{display: this.state.datePicker=="byMonth" ? "inline-block" : "none"}}
                        onChange={this.onMonthChange}
                        defaultValue={this.queryDate}/>
                    <DatePicker 
                        className={myStyle['mySelect']} 
                        style={{display: this.state.datePicker=="custom" ? "inline-block" : "none"}}
                        placeholder="start date"
                        onChange={this.onFromRangeChange}
                        disabledDate={this.handleStartDisabledDate.bind(this)}
                        />
                    <DatePicker 
                        className={myStyle['mySelect']} 
                        style={{display: this.state.datePicker=="custom" ? "inline-block" : "none"}}
                        placeholder="end date"
                        onChange={this.onToRangeChange}
                        disabledDate={this.handleEndDisabledDate.bind(this)}
                        />
                    <Button className={myStyle['myButton']} onClick={this.triggerSearch} type="primary">Get Report</Button>
                </Row>
                <div style={wrapper}>
                    {/* <FloorCard content={this.queryRoom}></FloorCard> */}
                    {data 
                        ? 
                        <div style={wrapperDetail}>
                            <StatisCard data={data.utilizeRate * 100} title={this.queryRoom + " utilization of core hours"} style={{margin: '5px 0 10px 0'}}/>
                            <TimeLine 
                                range={this.queryRangeType}
                                data={data.roomStatusList}
                                date={this.queryDate ? this.queryDate.format('YYYY-MM-DD') : null}
                                fromDate={this.queryFromDate}
                                toDate={this.queryToDate}
                                cusFromDate={this.cusFromDate}
                                cusToDate={this.cusToDate}
                            />
                        </div>
                        :
                        <div style={{ margin: '10px 0 0 0', width: '100%'}}><Alert message="No data for this room." type="info" /></div>
                    }
                </div>
            </div>
        );
    }
}

export default RoomReport;