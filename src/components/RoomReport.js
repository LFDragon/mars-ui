import React, { Component } from 'react';
import moment from 'moment';
import { Select, Row, DatePicker, Alert } from 'antd';
import { connect } from 'dva';
import FloorCard from './FloorCard';
import StatisCard from './StatisCard';
import TimeLine from './TimeLine';

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
            <div style={{ padding: '30px', borderTop: '1px solid lightgrey' }}>
                <Row gutter={16}>
                    <Select
                        showSearch
                        style={{ width: 200, marginRight: '20px' }}
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
                        <Option value="CR25.4">CR25.4</Option>
                        <Option value="VCR25.5">VCR25.5</Option>
                    </Select>
                    <Select defaultValue={this.queryRange} style={{ width: 200, marginRight: '20px' }} onChange={this.onRangeChange}>
                        <Option value="byDay">By Day</Option>
                        <Option value="byMonth">By Month</Option>
                        <Option value="custom">Custom Range</Option>
                    </Select>
                    <DatePicker style={{ width: 200 }} onChange={this.onDateChange} defaultValue={this.queryDate}/>
                </Row>
                <div style={wrapper}>
                    <FloorCard content={this.queryRoom}></FloorCard>
                    {data 
                        ? 
                        <div style={wrapperDetail}>
                            <StatisCard data={data.utilizeRate} />
                            <TimeLine range="day" data={data.roomStatusList} dateFrom={this.queryDate.format('YYYY-MM-DD')} />
                        </div>
                        :
                        <div style={{ margin: '10px 0 0 20px' }}><Alert message="No data for this room." type="info" /></div>
                    }
                </div>
            </div>
        );
    }
}

export default RoomReport;