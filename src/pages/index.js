import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import FloorRow from '../components/FloorRow';

const { TabPane } = Tabs;
const namespace = 'meetingroom';

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

@connect(mapStateToProps, mapDispatchToProps)
export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.onDidMount();
        // this.interval = setInterval(() => {
        //    this.props.onDidMount();
        // }, 10000);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '20px'}}>
                <TabPane tab="TKH OT 2" key="1">
                    {this.props.roomData.data.map((value, index) => {
                        return <FloorRow data={value}></FloorRow>
                    })}
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