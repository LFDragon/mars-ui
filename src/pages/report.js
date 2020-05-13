import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd';
import { connect } from 'dva';
import StatisCard from '../components/StatisCard';
import RoomReport from '../components/RoomReport';
import styles from '../css/General.less';

const { TabPane } = Tabs;
const namespace = 'allreport';

const mapStateToProps = (state) => {
    const data = state[namespace];
    return {
        data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        queryRoom: (params) => {
            dispatch({
                type: `${namespace}/queryRoomList`,
                payload: params,
            });
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.queryRoom(['TKHOT2']);
    }

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span={24}>
                        <div className={styles['my-desc']}>
                            <span style={{color: '#E51414'}}>MARS</span> focuses on automatically monitoring and optimizing the utilization of meeting rooms. 
                            This page is to generate the meeting room usage report.
                        </div>
                    </Col>
                </Row>
                <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '5px', paddingBottom: '20px'}}>
                    <TabPane tab="TKH OT 2" key="1">
                        <StatisCard data={this.props.data.utilRate * 100} title="Real-time Overall Utilization" style={{marginBottom: '10px'}}/>
                        <RoomReport roomList={this.props.data.rooms} />
                    </TabPane>
                    <TabPane tab="TKH OT 1" key="2">
                        No data.
                    </TabPane>
                    <TabPane tab="..." key="3">
                        No data.
                    </TabPane>
                </Tabs>
            </div>   
        );
    }
    
}