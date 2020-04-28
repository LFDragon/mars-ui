import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd';
import { connect } from 'dva';
import FloorRow from '../components/FloorRow';
import styles from '../css/General.less';

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
            <div>
                <Row type="flex" justify="center">
                    <Col span={24}>
                        <div className={styles['my-desc']}>
                            <span style={{color: '#E51414'}}>MARS</span> focuses on automatically monitoring and optimizing the utilization of meeting rooms. 
                            This page shows the real-time status of each meeting room.
                        </div>
                        <div className={styles['my-desc-legend']}>
                            <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightgreen'}}></div>
                            - Available
                            </div>
                            <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightpink'}}></div>
                            - In use
                            </div>
                            <div className={styles['my-desc-legend-row']}><div className={styles['my-desc-legend-square']} style={{backgroundColor: 'lightgrey'}}></div>
                            - Unknown
                            </div>
                        </div>
                    </Col>
                </Row>
                <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '5px', paddingBottom: '20px'}}>
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
            </div>      
        );
    }
    
}