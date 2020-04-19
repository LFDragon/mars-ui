import { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

const redColor = {
    color: '#E51414'
};

class BasicLayout extends Component {
    handleClick = e => {
        if (window.location.pathname==e.key) return;
        switch(e.key) {
            case '/':
                window.open("./", "_self");
                break;
            case '/report':
                window.open("./report", "_self");
                break;
        }
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <Row>
                        <Col span={24}>
                            <Menu onClick={this.handleClick} theme="light" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
                                <Menu.Item key="/">Status</Menu.Item>
                                <Menu.Item key="/report">Report</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className={styles['my-banner']}>
                                <div className={styles['my-banner-img-wrapper']}><img className={styles['my-banner-img']} src={require('../assets/img/mars_logo.png')} alt={'Mars Logo'}></img></div>
                                <div className={styles['my-banner-text']}><span style={redColor}>M</span>eeting-room <span style={redColor}>A</span>utomation <span style={redColor}>R</span>evolution <span style={redColor}>S</span>ystem</div>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={20}>
                            <div style={{ minHeight: 360 }}>
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