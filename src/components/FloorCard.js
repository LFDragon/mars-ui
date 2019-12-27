import React, { Component } from 'react';
import { Card } from 'antd';

class FloorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const style = {
            width: '100px',
            margin: '10px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            border: '1px solid grey',
            background: 'grey',
            color: 'white',
            fontSize: '16px',
            textAlign: 'center'
        };

        return (
            <Card style={style}>
                {this.props.floor}
            </Card>  
        );
    }
}

export default FloorCard;