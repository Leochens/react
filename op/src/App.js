import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import OPSider from './containers/Sider/Sider';
import { Link } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            className="app-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">小年糕TIA</Menu.Item>
            <Menu.Item key="2">摄影课</Menu.Item>
            <Menu.Item key="3">绘画课</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <OPSider />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
              <Breadcrumb.Item>摄影训练营</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}


export default App;
