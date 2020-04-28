import React, { Component } from 'react';
import moment from 'moment';
import { List, Card, Popover } from 'antd';
import FloorCard from './FloorCard';
import myStyle from '../css/FloorRow.less';

const statusMap = {
    AVAILABLE: {
        backgroundColor: 'lightgreen'
    },
    OCCUPIED: {
        backgroundColor: 'lightpink'
    },
    UNKNOWN: {
        backgroundColor: 'lightgrey'
    }
}

class FloorRow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={myStyle['wrapper']}>
                <FloorCard content={this.props.data.floor}></FloorCard>
                <div className={myStyle['row-wrapper']}>
                    {this.props.data.rooms.map((item, index) => (
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
                            <Card bodyStyle={{padding:'10px'}} style={statusMap[item.currentStatus.status]} className={myStyle['card-detail']}>
                                <div style={{color:'grey'}}>{item.room.name.replace(/CR|VCR/, '')}</div>
                                {/* <div>{item.currentStatus.status}</div> */}
                            </Card>
                        </Popover>
                    ))}
                </div>
            </div>
        );
    }
}

export default FloorRow;