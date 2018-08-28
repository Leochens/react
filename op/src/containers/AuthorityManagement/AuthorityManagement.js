import React, { Component } from 'react';
import './AuthorityManagement.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionCreators from '../../actions';
import AuthorityBar from '../../components/AuthorityBar/AuthorityBar';
import { Collapse, Button } from 'antd';
const Panel = Collapse.Panel;

const header = (text) => <div>
    <span>{text}</span>
    <Button style={{
        float: 'right'
    }}>权限管理</Button>
</div>

class AuthorityManagement extends Component {
    constructor(props) {
        super(props);
        const {
            serverActions: {
                actionFetchAuthorities
            }
        } = this.props;
        actionFetchAuthorities
            && actionFetchAuthorities();//从action里读死数据
    }

    render() {
        return (
            <div className="auth">
                <Collapse accordion
                    defaultActiveKey='3'
                >
                    <Panel header={header('点评作业：拥有个人点评页，可以为学生作业进行点评')} key="1">
                        <AuthorityBar
                            willBeSelectedUser={this.props.willBeSelectedUser}
                            switchActions={this.props.switchActions}
                            selectActions={this.props.selectActions}
                            selectedUser={this.props.selectedUser}
                            departmentTree={this.props.departmentTree}
                        />
                    </Panel>
                    <Panel header={header('带客老师：拥有审核点评老师点评内容的权限，包括撤回点评，自行点评')} key="2">
                        <AuthorityBar
                            willBeSelectedUser={this.props.willBeSelectedUser}
                            switchActions={this.props.switchActions}
                            selectActions={this.props.selectActions}
                            selectedUser={this.props.selectedUser}
                            departmentTree={this.props.departmentTree}
                        />
                    </Panel>
                    <Panel header={header('点评作业：拥有个人点评页，可以为学生作业进行点评')} key="3">
                        <AuthorityBar
                            willBeSelectedUser={this.props.willBeSelectedUser}
                            switchActions={this.props.switchActions}
                            selectActions={this.props.selectActions}
                            selectedUser={this.props.selectedUser}
                            departmentTree={this.props.departmentTree}
                        />
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

//递归遍历树节点
const getNode = (root, entity) => {
    if (!root) return {};
    const { departments } = entity;
    const { children } = root;
    if (children.length === 0) {
        return []
    } else {
        return children.map(id => {
            return {
                ...departments[id],
                children: getNode(departments[id], entity)
            }
        });
    }
}
const recursionMapTree = (root, entity) => {
    return getNode(root, entity);
}

const mapStateToProps = state => {
    const {
        AuthorityConfigReducer: {
            treeRoot,
            selectedMembersIds,
            currentDepartment
        },
        entitiesReducer: {
            admins,
            departments
        }
    } = state;
    const root = departments[treeRoot]; //根实体
    if (!root) {
        return {}
    }
    let willBeSelectedUser = []
    const tree = recursionMapTree(root, { admins, departments });
    if (departments[currentDepartment].members) {
        willBeSelectedUser = departments[currentDepartment].members.map(id => {
            return {
                ...admins[id],
                selected: false
            }
        })
    }

    //将得到的子节点添加到原来的根节点上
    const _tree = {
        ...departments[treeRoot],
        children: tree
    }
    console.log('>>>', _tree);
    return {
        departmentTree: _tree,
        willBeSelectedUser,
        selectedUser: selectedMembersIds.map(id => admins[id]),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch),
        switchActions: bindActionCreators(allActionCreators.switchAction, dispatch),
        selectActions: bindActionCreators(allActionCreators.selectAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorityManagement);