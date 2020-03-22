import React, { Component } from 'react';
import { Popover } from 'antd';

const style = {
    borderLeft: '1px solid lightgrey',
    height: '100%'
}
const colorMap = {
    AVAILABLE: {
        backgroundColor: 'lightgreen'
    },
    OCCUPIED: {
        backgroundColor: 'lightpink'
    },
    UNKNOWN: {
        backgroundColor: 'white'
    }
}

class TimeLineSec extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Popover 
                placement="top" 
                content={(
                    <div>
                        <p style={{ margin: '0'}}>Start: {this.props.data.start}</p>
                        <p style={{ margin: '0'}}>End: {this.props.data.end}</p>
                        <p style={{ margin: '0'}}>Status: {this.props.data.status}</p>
                    </div>
                )} 
                trigger="hover">
                <div style={{ ...style, ...colorMap[this.props.data.status], width: this.props.width+'%' }}></div>
            </Popover>
        );
    }
}

export default TimeLineSec;