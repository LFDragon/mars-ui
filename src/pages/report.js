import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import StatisCard from '../components/StatisCard';
import RoomReport from '../components/RoomReport';

const { TabPane } = Tabs;
const namespace = 'meetingroom';

const mockStatisData = {
    'bookRate': 12.3,
    'useRage': 9.2,
    'util': 10
};

const mapStateToProps = (state) => {
    const roomData = state[namespace];
    return {
        roomData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryRoomStatus`,
            });
        },
    };
};

// @connect(mapStateToProps, mapDispatchToProps)
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
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '20px'}}>
                <TabPane tab="TKH OT 2" key="1">
                    <StatisCard data={mockStatisData} />
                    <RoomReport />
                </TabPane>
                <TabPane tab="TKH OT 1" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="..." key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>      
        );
    }
    
}