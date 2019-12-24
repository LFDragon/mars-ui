import React, { Component } from 'react';
import { Card, Tabs } from 'antd';

const { Meta } = Card;
const { TabPane } = Tabs;


export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    callback(key) {
        console.log(key);
    }

    render() {
        const style = {
            width: '400px',
            margin: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            border: '1px solid #e8e8e8',
        };

        return (
            <Tabs defaultActiveKey="1" onChange={this.callback} style={{ paddingTop: '20px'}}>
                <TabPane tab="TKH OT 1" key="1">
                    <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
                        <Meta
                            avatar={<img 
                                alt=""
                                style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                            />}
                            title="Alipay"
                            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                        />
                    </Card>
                </TabPane>
                <TabPane tab="TKH OT 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="..." key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>      
        );
    }
    
}