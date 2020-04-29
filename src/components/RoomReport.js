import React, { Component } from 'react';
import moment from 'moment';
import { Select, Row, DatePicker, Alert, Button } from 'antd';
import { connect } from 'dva';
import FloorCard from './FloorCard';
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
        },
        getRoomList: () => {
            dispatch({
                type: `${namespace}/queryRoomList`,
            });
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class RoomReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePicker: "byDay"
        };
        this.queryRangeType = "byDay";
        this.queryDate = moment().locale('zh-cn');
        this.queryFromDate = moment().startOf('month').format('YYYY-MM-DD');
        this.queryToDate = moment().endOf('month').format('YYYY-MM-DD');
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onRangeTypeChange = this.onRangeTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
        this.triggerSearch = this.triggerSearch.bind(this);
        this.props.getRoomList();
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
        this.queryFromDate = date.startOf('month').format('YYYY-MM-DD');
        this.queryToDate = date.endOf('month').format('YYYY-MM-DD');
    }

    onRangeChange(date, dateString) {
        this.queryRange = date;
    }

    triggerSearch() {
        this.queryRangeType = this.state.datePicker;

        var roomData = this.props.reportData.rooms;
        if (!roomData[this.queryRoom]) return;
        var roomId = roomData[this.queryRoom].room.id
        
        var queryString = "?";
        if (!this.queryDate) return;

        switch(this.queryRangeType) {
            case "byDay":
                queryString += `fromDate=${this.queryDate.format('YYYY-MM-DD')}`;
                break;
            case "byMonth":
                queryString += `fromDate=${this.queryFromDate}&toDate=${this.queryToDate}`;
        }
        console.log(queryString);
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
                            Object.keys(this.props.reportData.rooms).sort().map((val, idx) => {
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
                    <RangePicker
                        className={myStyle['mySelect']} 
                        style={{display: this.state.datePicker=="custom" ? "inline-block" : "none"}}
                        onChange={this.onRangeChange}
                        defaultValue={[this.queryDate, this.queryDate]}/>
                    <Button className={myStyle['myButton']} onClick={this.triggerSearch} type="primary">Get Report</Button>
                </Row>
                <div style={wrapper}>
                    {/* <FloorCard content={this.queryRoom}></FloorCard> */}
                    {data 
                        ? 
                        <div style={wrapperDetail}>
                            <StatisCard data={data.utilizeRate * 100} title={this.queryRoom + " Utilization"} style={{margin: '5px 0 10px 0'}}/>
                            <TimeLine 
                                range={this.queryRangeType}
                                data={data.roomStatusList}
                                date={this.queryDate.format('YYYY-MM-DD')}
                                fromDate={this.queryFromDate}
                                toDate={this.queryToDate}
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