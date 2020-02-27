import { Component } from 'react';
import { Layout, Carousel, Row, Col } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

const img = {
    marginTop: '10px',
    width: '160px',
    marginLeft: 'auto',
    marginRight: 'auto'
};

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
                                            <img style={img} src={require('../assets/img/mars_logo.png')} alt={'Mars Logo'}></img>
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