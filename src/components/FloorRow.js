import React, { Component } from 'react';
import { List, Card, Popover } from 'antd';
import FloorCard from './FloorCard';
import myStyle from '../css/FloorRow.css';

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
                        grid={{ column: 6 }}
                        dataSource={this.props.data.rooms}
                        renderItem={ (item, index) => (
                            <List.Item style={ {marginBottom: 0} }>
                                <Popover 
                                    placement="bottom" 
                                    content={(
                                        <div>
                                            <p style={{ margin: '0'}}>Status: {item.currentStatus.status}</p>
                                            <p style={{ margin: '0'}}>Detail: {item.room.remark}</p>
                                            <p style={{ margin: '0'}}>Time: {Date(item.currentStatus.updateTimestamp)}</p>
                                        </div>
                                    )} 
                                    trigger="hover">
                                    <Card style={cardDetail} className={myStyle[statusMap[item.currentStatus.status]]}> {item.room.name} </Card>
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