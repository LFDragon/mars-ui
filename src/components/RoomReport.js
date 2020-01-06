import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const { Option } = Select;

class RoomReport extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChange(value) {
        console.log(`selected ${value}`);
    }

    onBlur() {
        console.log('blur');
    }

    onFocus() {
        console.log('focus');
    }

    onSearch(val) {
        console.log('search:', val);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                    <Select
                        showSearch
                        style={{ width: 200, marginRight: '20px' }}
                        placeholder="Select Room"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
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
            </div>
        );
    }
}

export default RoomReport;