import React, { Component } from 'react';
import './AuthorityBar.css';
import { Input, Button, Row, Col } from 'antd';
import DepartmentTree from '../DepartmentTree/DepartmentTree';
const Search = Input.Search;
export default class AuthorityBar extends Component {
    //渲染待选择用户区域
    renderWillBeSelectUsers = () => {
        const {
            willBeSelectedUser,
            switchActions: {
                actionToggleSelectAuthorityUsers
            }
        } = this.props;
        if (!willBeSelectedUser) return null;
        return willBeSelectedUser.map((item, id) => {
            return <Button
                onClick={() => actionToggleSelectAuthorityUsers(item.id)}
                className={"select-user-btn"}
                style={
                    item.isSelected ? { backgroundColor: '#ddd' } : {}
                }
                key={id}>
                {item.name}
            </Button>
        })
    }
    //渲染已选择用户区域
    renderSelectedUsers = () => {
        const { selectedUser,
            switchActions: {
                actionToggleSelectAuthorityUsers
            }
        } = this.props;
        if (!selectedUser) return null;
        return selectedUser.map((item, id) => {
            return <Button
                className={"select-user-btn"}
                onClick={() => actionToggleSelectAuthorityUsers(item.id)}
                key={id}>
                {item.name}
            </Button>
        })
    }
    render() {
        return (
            <Row className="auth-comment-big">
                <Col span={12} className="auth-left">
                    <Row className="auth-left-btns">
                        <Button>添加</Button>
                        <Button>删除</Button>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </Row>
                    <Row >
                        {this.renderSelectedUsers()}
                    </Row>
                </Col >
                <Col span={12} className="auth-right">
                    <Col span={8} className="auth-tree">
                        <DepartmentTree
                            departmentTree={this.props.departmentTree}
                            switchActions={this.props.switchActions}
                        />
                    </Col>
                    <Col span={16}>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: '100%' }}
                        />
                        {this.renderWillBeSelectUsers()}
                    </Col>

                </Col>
            </Row>
        )
    }
}