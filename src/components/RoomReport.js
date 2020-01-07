import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import FloorCard from './FloorCard';
import StatisCard from './StatisCard';

const { Option } = Select;

const wrapper = {
    marginTop: '20px',
    display: 'flex'
};
const wrapperDetail = {
    width: '100%'
};

class RoomReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: 'CR24.4',
            statis: {
                'bookRate': 3.5,
                'useRage': 8,
                'util': 15.78
            },
        };
        this.onChange = this.onChange.bind(this); 
    }

    onChange(value) {
        this.setState({'room': value});
    }

    onSearch(val) {
        console.log('search:', val);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div style={{ padding: '30px', borderTop: '1px solid lightgrey' }}>
                <Row gutter={16}>
                    <Select
                        showSearch
                        style={{ width: 200, marginRight: '20px' }}
                        placeholder="Select Room"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="CR24.4">CR24.4</Option>
                        <Option value="VCR24.5">VCR24.5</Option>
                        <Option value="CR25.4">CR25.4</Option>
                        <Option value="VCR25.5">VCR25.5</Option>
                    </Select>
                    <Select placeholder="Select Range" style={{ width: 200 }} onChange={this.handleChange}>
                        <Option value="byDay">By Day</Option>
                        <Option value="byMonth">By Month</Option>
                        <Option value="custom">Custom Range</Option>
                    </Select>
                </Row>
                <div style={wrapper}>
                    <FloorCard content={this.state.room}></FloorCard>
                    <div style={wrapperDetail}>
                        <StatisCard data={this.state.statis} />
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomReport;