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
        this.state = {};
        this.queryRoom = "CR24.4";
        this.queryRange = "byDay";
        this.queryDate = moment(new Date().toLocaleDateString(), 'YYYY-MM-DD').subtract(1,'days');
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    onRoomChange(value) {
        this.queryRoom = value;
        this.triggerSearch();
    }

    onRangeChange(value) {
        this.queryRange = value;
        this.triggerSearch();
    }

    onDateChange(date, dateString) {
        this.queryDate = date;
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
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="CR24.4">CR24.4</Option>
                        <Option value="VCR24.5">VCR24.5</Option>
                        <Option value="CR25.3">CR25.3</Option>
                        <Option value="VCR25.5">VCR25.5</Option>
                    </Select>
                    <Select defaultValue={this.queryRange} className={myStyle['mySelect']} onChange={this.onRangeChange}>
                        <Option value="byDay">By Day</Option>
                        <Option value="byMonth">By Month</Option>
                        <Option value="custom">Custom Range</Option>
                    </Select>
                    <DatePicker className={myStyle['mySelect']} onChange={this.onDateChange} defaultValue={this.queryDate}/>
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