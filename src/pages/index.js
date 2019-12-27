import React, { Component } from 'react';
import { Tabs } from 'antd';
import FloorRow from '../components/FloorRow';
import { mockData } from '../mock/mockdata';

const { TabPane } = Tabs;

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    callback(key) {
        console.log(key);
    }

    render() {
        // const mockData = mockData;

        return (
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '20px'}}>
                <TabPane tab="TKH OT 1" key="1">
                    {mockData.map((value, index) => {
                        return <FloorRow data={value}></FloorRow>
                    })}
                </TabPane>
                <TabPane tab="TKH OT 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="..." key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>      
        );
    }
    
}