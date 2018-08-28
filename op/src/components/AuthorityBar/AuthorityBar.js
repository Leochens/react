import React, { Component } from 'react';
import './AuthorityBar.css';
import { Row, Col } from 'antd';
import DepartmentTree from '../DepartmentTree/DepartmentTree';
import MemberSelectBox from '../MemberSelectBox/MemberSelectBox';
export default class AuthorityBar extends Component {

    handleAddSelectedMembers = (ids) => {
        const {
            selectActions: {
                actionAddAuthorityMembers
            }
        } = this.props;
        console.log(ids);
        actionAddAuthorityMembers
            && actionAddAuthorityMembers(ids);
    }
    handleDelSelectedMembers = (ids) => {
        const {
            selectActions: {
                actionDelAuthorityMembers
            }
        } = this.props;
        console.log(ids);
        actionDelAuthorityMembers
            && actionDelAuthorityMembers(ids);
    }
    render() {
        return (

            <Row className="auth-comment-big">
                <Col span={12} className="auth-left">
                    <Row >
                        <MemberSelectBox
                            onGetMemberIds={this.handleAddSelectedMembers}
                            members={this.props.selectedUser}
                            action={this.handleDelSelectedMembers}
                            title={'删除'}
                        />
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
                        <MemberSelectBox
                            onGetMemberIds={this.handleAddSelectedMembers}
                            members={this.props.willBeSelectedUser}
                            action={this.handleAddSelectedMembers}
                            showDisable={true}
                            title={'添加'}
                        />
                    </Col>

                </Col>
            </Row>
        )
    }
}