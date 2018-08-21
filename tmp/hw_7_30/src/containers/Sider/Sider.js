import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
export default class _Sider extends Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >

                    <SubMenu key="sub1" title={<span><Icon type="user" />学员档案</span>}>
                        <Menu.Item key="1"><Link to="studentList">学员列表</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="user" />课程信息</span>}>
                        <Menu.Item key="2">上课详情</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="laptop" />作业点评</span>}>
                        <Menu.Item key="3"><Link to="/homeworkReview">点评页面</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="laptop" />权限管理</span>}>
                        <Menu.Item key="4"><Link to="/authorityManagement">权限管理</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}