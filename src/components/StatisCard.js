import React, { Component } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

class StatisCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{ padding: '10px 0px 30px 0px' }}>
                <Row gutter={[16, 16]}>
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
                    <Col xs={{span: 24}} sm={{span: 8}}>
                        <Card>
                        <Statistic
                            title={this.props.title}
                            value={this.props.data}
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