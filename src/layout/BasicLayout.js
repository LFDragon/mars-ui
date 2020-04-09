import { Component } from 'react';
import { Layout, Carousel, Row, Col } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

const wrapper = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
};
const img = {
    marginTop: '8px',
    marginBottom: '10px',
    width: '160px',
    height: '160px'
};
const bannerText = {
    marginLeft: '20px',
    fontSize: '26px',
};
const redColor = {
    color: '#E51414'
}

class BasicLayout extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content>
                    <Row type="flex" justify="center">
                        <Col span={18}>
                            <div style={{ padding: 24, minHeight: 360 }}>
                                <div className={styles['my-banner']}>
                                    <div style={wrapper}>
                                        <img style={img} src={require('../assets/img/mars_logo.png')} alt={'Mars Logo'}></img>
                                        <div style={bannerText}><span style={redColor}>M</span>eeting-room <span style={redColor}>A</span>utomation <span style={redColor}>R</span>evolution <span style={redColor}>S</span>ystem</div>
                                    </div>
                                </div>
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