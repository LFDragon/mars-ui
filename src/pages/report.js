import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import StatisCard from '../components/StatisCard';
import RoomReport from '../components/RoomReport';

const { TabPane } = Tabs;

const mockStatisData = {
    'bookRate': 0,
    'useRage': 0,
    'util': 0
};

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // this.props.onDidMount();
    }

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '20px', paddingBottom: '20px'}}>
                <TabPane tab="TKH OT 2" key="1">
                    <StatisCard data={mockStatisData.util} title="Overall Utilization"/>
                    <RoomReport />
                </TabPane>
                <TabPane tab="TKH OT 1" key="2">
                    No data.
                </TabPane>
                <TabPane tab="..." key="3">
                    No data.
                </TabPane>
            </Tabs>      
        );
    }
    
}