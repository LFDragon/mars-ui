import React, { Component } from 'react';

const style = {
    borderLeft: '1px solid lightgrey',
    fontSize: '12px',
    height: '100%'
}

class TimeLineSecDate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ ...style, width: this.props.width+'%' }}>{this.props.children}</div>
        );
    }
}

export default TimeLineSecDate;