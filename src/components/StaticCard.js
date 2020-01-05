import React, { Component } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

class StaticCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={16}>
                <Col span={8}>
                    <Card>
                    <Statistic
                        title="Book Rate"
                        value={11.28}
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
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        suffix="%"
                    />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                    <Statistic
                        title="Utilization"
                        value={12.0}
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

export default StaticCard;