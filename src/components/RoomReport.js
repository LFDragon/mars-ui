import React, { Component } from 'react';
import moment from 'moment';
import { Select, Row, DatePicker, Alert } from 'antd';
import { connect } from 'dva';
import FloorCard from './FloorCard';
import StatisCard from './StatisCard';
import TimeLine from './TimeLine';
import myStyle from '../css/RoomReport.less';

const { Option } = Select;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const namespace = 'roomreport';

const wrapper = {
    marginTop: '20px',
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
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class RoomReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePicker: "byDay"
        };
        this.queryRoom = "CR24.4";
        this.queryRangeType = "byDay";
        this.queryDate = moment().locale('zh-cn');
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onRangeTypeChange = this.onRangeTypeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
    }

    onRoomChange(value) {
        this.queryRoom = value;
        this.triggerSearch();
    }

    onRangeTypeChange(value) {
        this.queryRangeType = value;
        this.setState({datePicker: value});
        this.triggerSearch();
    }

    onDateChange(date, dateString) {
        this.queryDate = date;
        this.triggerSearch();
    }

    onMonthChange(date, dateString) {
        this.queryMonth = date;
        this.triggerSearch();
    }

    onRangeChange(date, dateString) {
        this.queryRange = date;
        this.triggerSearch();
    }

    triggerSearch() {
        var queryString = "?";
        if (!this.queryDate) return;
        queryString += `fromDate=${this.queryDate.format('YYYY-MM-DD')}`;
        this.props.queryReport(queryString);
    }

    componentDidMount() {
        this.triggerSearch();
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
            <div style={{ padding: '30px 10px 0px 10px', borderTop: '1px solid lightgrey' }}>
                <Row gutter={16}>
                    <Select
                        showSearch
                        className={myStyle['mySelect']}
                        defaultValue={this.queryRoom}
                        optionFilterProp="children"
                        onChange={this.onRoomChange}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="CR24.4">CR24.4</Option>
                        <Option value="VCR24.5">VCR24.5</Option>
                        <Option value="CR25.3">CR25.3</Option>
                        <Option value="VCR25.5">VCR25.5</Option>
                    </Select>
                    <Select defaultValue={this.queryRangeType} className={myStyle['mySelect']} onChange={this.onRangeTypeChange}>
                        <Option value="byDay">By Day</Option>
                        <Option value="byMonth">By Month</Option>
                        <Option value="custom">Custom Range</Option>
                    </Select>
                    <DatePicker className={myStyle['mySelect']} style={{display: this.state.datePicker=="byDay" ? "block" : "none"}} onChange={this.onDateChange} defaultValue={this.queryDate}/>
                    <MonthPicker className={myStyle['mySelect']} style={{display: this.state.datePicker=="byMonth" ? "block" : "none"}} onChange={this.onMonthChange} defaultValue={this.queryDate}/>
                    <RangePicker className={myStyle['mySelect']} style={{display: this.state.datePicker=="custom" ? "block" : "none"}} onChange={this.onRangeChange} defaultValue={[this.queryDate, this.queryDate]}/>
                </Row>
                <div style={wrapper}>
                    {/* <FloorCard content={this.queryRoom}></FloorCard> */}
                    {data 
                        ? 
                        <div style={wrapperDetail}>
                            <StatisCard data={data.utilizeRate * 100} title={this.queryRoom + " Utilization"}/>
                            <TimeLine range="day" data={data.roomStatusList} dateFrom={this.queryDate.format('YYYY-MM-DD')} />
                        </div>
                        :
                        <div style={{ margin: '10px 0 0 0' }}><Alert message="No data for this room." type="info" /></div>
                    }
                </div>
            </div>
        );
    }
}

export default RoomReport;