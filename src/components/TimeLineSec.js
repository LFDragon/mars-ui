import React, { Component } from 'react';
import { Popover } from 'antd';

const style = {
    borderLeft: '1px solid lightgrey',
    height: '100%'
}
const colorMap = {
    AVAILABLE: {
        backgroundColor: 'white'
    },
    OCCUPIED: {
        backgroundColor: 'lightpink'
    },
    UNKNOWN: {
        backgroundColor: 'lightgrey'
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
                        <p style={{ margin: '0'}}>Detail: {this.props.data.detail}</p>
                    </div>
                )} 
                trigger="hover">
                <div style={{ ...style, ...colorMap[this.props.data.status], width: this.props.width+'%' }}></div>
            </Popover>
        );
    }
}

export default TimeLineSec;