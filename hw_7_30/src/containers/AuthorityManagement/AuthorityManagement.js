import React, { Component } from 'react';
import './AuthorityManagement.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionCreators from '../../actions';
import DepartmentTree from '../../components/DepartmentTree/DepartmentTree';
import { Input, Button, Row, Col } from 'antd';

const Search = Input.Search;
class AuthorityManagement extends Component {
    constructor(props) {
        super(props);
        const {
            serverActions: {
                actionFetchAuthorities
            }
        } = this.props;
        actionFetchAuthorities
            && actionFetchAuthorities();//数据写死了
    }
    renderWillBeSelectUsers = () => {
        const {
            willBeSelectedUser,
            switchActions: {
                actionToggleSelectAuthorityUsers
            }
        } = this.props;
        // console.log(this.props);
        if (!willBeSelectedUser) return null;
        return willBeSelectedUser.map((item, id) => {
            return <Button
                onClick={() => actionToggleSelectAuthorityUsers(item.id)}
                className={"select-user-btn"}
                style={
                    item.isSelected ? {backgroundColor:'#ddd'}: {}
                }
                key={id}>
                {item.name}
            </Button>
        })
    }
    renderSelectedUsers = () => {
        const { selectedUser } = this.props;
        // console.log(this.props);
        if (!selectedUser) return null;
        return selectedUser.map((item, id) => {
            return <Button
                className={ "select-user-btn"}
               
                key={id}>
                {item.name}
            </Button>
        })
    }
    render() {
        console.log('willBeSelectedUser', this.props.willBeSelectedUser);
        return (
            <div className="auth">
                <Row className="auth-comment">
                    点评作业：拥有个人点评页，可以为学生作业进行点评
                    <Button className="auth-btn">权限管理</Button>
                </Row>
                <Row className="auth-comment">
                    带客老师：拥有审核点评老师点评内容的权限，包括撤回点评，自行点评
                    <Button className="auth-btn">权限管理</Button>
                </Row>
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
                    <Col span={12}>
                        <Col span={8} className="auth-tree">
                            <DepartmentTree
                                departmentTree={this.props.departmentTree}
                                switchActions={this.props.switchActions}
                            />
                        </Col>
                        <Col span={16}>
                            {this.renderWillBeSelectUsers()}
                        </Col>

                    </Col>
                </Row>
            </div>
        )
    }
}


const getNode = (root, entity) => {
    if (!root) return {};
    const { departments, admins } = entity;
    const { childs, users } = root;
    if (childs.length === 0) {
        return []
    } else {
        return childs.map(id => {
            return {
                ...departments[id],
                childs: getNode(departments[id], entity)
            }
        });
    }
}
const recursionMapTree = (root, entity) => {
    const nodes = getNode(root, entity);
    console.log('nodes', nodes);
    return nodes;
}

const mapStateToProps = state => {
    const {
        AuthorityConfigReducer: {
            treeRoot,
            selectedUserIds,
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
    if (departments[currentDepartment].users) {
        willBeSelectedUser = departments[currentDepartment].users.map(id => admins[id])
    }
    console.log('tree here', tree);
    return {
        departmentTree: tree,
        willBeSelectedUser,
        selectedUser: selectedUserIds.map(id => admins[id]),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch),
        switchActions: bindActionCreators(allActionCreators.switchAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorityManagement);