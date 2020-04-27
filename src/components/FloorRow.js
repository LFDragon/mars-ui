import React, { Component } from 'react';
import moment from 'moment';
import { List, Card, Popover } from 'antd';
import FloorCard from './FloorCard';
import myStyle from '../css/FloorRow.less';

const wrapper = {
    marginBottom: '15px',
    display: 'flex'
};
const wrapperDetail = {
    width: '100%'
};
const cardDetail = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '10px 0 0 10px'
};
const statusMap = {
    AVAILABLE: 'floorRowCardAvailable',
    OCCUPIED: 'floorRowCardOccupied',
    UNKNOWN: 'floorRowCardUnknown'
}

class FloorRow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={wrapper}>
                <FloorCard content={this.props.data.floor}></FloorCard>
                <div style={wrapperDetail}>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 6,
                          }}
                        dataSource={this.props.data.rooms}
                        renderItem={ (item, index) => (
                            <List.Item style={ {marginBottom: 0} }>
                                <Popover 
                                    placement="bottom" 
                                    content={(
                                        <div>
                                            <p style={{ margin: '0'}}>Status: {item.currentStatus.status}</p>
                                            <p style={{ margin: '0'}}>Detail: {item.room.remark}</p>
                                            <p style={{ margin: '0'}}>Update time: {moment.utc(item.currentStatus.updateTimestamp).format("YYYY-MM-DD HH:mm:ss")}</p>
                                        </div>
                                    )} 
                                    trigger="hover">
                                    <Card bodyStyle={{paddingTop:'10px', paddingBottom:'10px'}} style={cardDetail} className={myStyle[statusMap[item.currentStatus.status]]}>
                                        <div style={{color:'grey'}}>{item.room.name.replace(/CR|VCR/, '')}</div>
                                        {/* <div>{item.currentStatus.status}</div> */}
                                    </Card>
                                </Popover>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default FloorRow;