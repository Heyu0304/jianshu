import React from 'react';
import { Layout, Menu,Icon, message } from 'antd';
import "./SiderDemo.css";

const { Header, Sider, Content } =Layout;


export default class SiderDemo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            modalShow: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({collapsed: !this.state.collapsed,})
    };



    render(){
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>nan 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff',padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold': 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={ { margin: '24px 16px', padding:24, background: '#fff' } }>
                        content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}