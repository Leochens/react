import React, { Component } from 'react';
import './AuthorityBar.css';
import { Input, Button, Row, Col } from 'antd';
import DepartmentTree from '../DepartmentTree/DepartmentTree';
import ToggleButton from '../ToggleButton/ToggleButton';
const Search = Input.Search;
export default class AuthorityBar extends Component {
    state = {
        selectedMemberIds: [],
    }

    handelSelectMember = (id, e) => {
        const {
            switchActions: {
                actionToggleSelectAuthorityUsers
            }
        } = this.props;
        const newIds = this.state.selectedMemberIds.slice();
        if (newIds.includes(id)) {
            newIds.splice(newIds.indexOf(id), 1);
        } else {
            newIds.push(id);
        }
        this.setState({
            selectedMemberIds: newIds
        })
    }

    handleAddSelectedMembers = () => {
        const { selectedMemberIds } = this.state;
        const {
            selectActions: {
                actionAddAuthorityMembers
            }
        } = this.props;
        actionAddAuthorityMembers
            && actionAddAuthorityMembers(selectedMemberIds);
    }
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
            return <span
            key={id}

                onClick={() => this.handelSelectMember(item.id)}
            ><ToggleButton
                id={id}
                className={"select-user-btn"}
                disabled={item.isSelected ? true : false}
                >
                    {item.name}
                </ToggleButton></span>
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
            return <ToggleButton
                className={"select-user-btn"}
                // onClick={() => actionToggleSelectAuthorityUsers(item.id)}
                key={id}>
                {item.name}
            </ToggleButton>
        })
    }
    render() {
        return (
            <Row className="auth-comment-big">
                <Col span={12} className="auth-left">
                    <Row className="auth-left-btns">
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
                        <Row>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: '80%' }}
                            />
                            <Button
                                onClick={this.handleAddSelectedMembers}
                            >添加</Button>
                        </Row>
                        {this.renderWillBeSelectUsers()}
                    </Col>

                </Col>
            </Row>
        )
    }
}