import React, { Component } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

class StatisCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{ padding: '10px 30px 30px 30px' }}>
                <Row gutter={16}>
                    {/* <Col span={8}>
                        <Card>
                        <Statistic
                            title="Book Rate"
                            value={this.props.data.bookRate}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                        <Statistic
                            title="Usage Rate"
                            value={this.props.data.useRage}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="%"
                        />
                        </Card>
                    </Col> */}
                    <Col span={8}>
                        <Card>
                        <Statistic
                            title="Utilization"
                            value={this.props.data.util}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            suffix="%"
                        />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StatisCard;