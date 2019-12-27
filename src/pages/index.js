import React, { Component } from 'react';
import { Tabs } from 'antd';
import FloorRow from '../components/FloorRow';

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
        const mockData = [
            {
                floor: '25F',
                detail: [
                    {
                        room: 'CR 25.1',
                        status: 'AVAILABLE'
                    },
                    {
                        room: 'VCR 25.2',
                        status: 'UNKNOWN'
                    },
                    {
                        room: 'CR 25.3',
                        status: 'AVAILABLE'
                    },
                    {
                        room: 'CR 25.4',
                        status: 'UNAVAILABLE'
                    },
                    {
                        room: 'VCR 25.5',
                        status: 'UNAVAILABLE'
                    }
                ]
            },
            {
                floor: '24F',
                detail: [
                    {
                        room: 'CR 24.1',
                        status: 'UNAVAILABLE'
                    },
                    {
                        room: 'VCR 24.2',
                        status: 'AVAILABLE'
                    },
                    {
                        room: 'CR 24.3',
                        status: 'AVAILABLE'
                    },
                    {
                        room: 'CR 24.4',
                        status: 'UNAVAILABLE'
                    },
                    {
                        room: 'VCR 24.5',
                        status: 'UNKNOWN'
                    }
                ]
            },
            {
                floor: '...',
                detail: [
                    {
                        room: '...',
                        status: 'AVAILABLE'
                    }
                ]
            }
        ]

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