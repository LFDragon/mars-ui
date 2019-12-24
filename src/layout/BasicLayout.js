import { Component } from 'react';
import { Layout, Carousel, Row, Col } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <Row type="flex" justify="center">
                        <Col span={18}>
                            <div style={{ padding: 24, minHeight: 360 }}>
                                <span className={styles['override-ant-carousel']}>
                                    <Carousel>
                                        <div>
                                            <h3>HSBC MARS Logo</h3>
                                        </div>
                                    </Carousel>
                                </span>
                                <div>
                                    {this.props.children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>MARS ©2019 Created by HSBC</Footer>
            </Layout>
        )
    }
}
  
export default BasicLayout;