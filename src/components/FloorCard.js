import React, { Component } from 'react';
import { Card } from 'antd';


const style = {
    margin: '10px',
    minHeight: '63px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #2195F2',
    background: '#2195F2',
    color: 'white',
    fontSize: '16px',
    textAlign: 'center'
};


class FloorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card bodyStyle={{padding: '15px'}} style={style}>
                {this.props.content}
            </Card>  
        );
    }
}

export default FloorCard;