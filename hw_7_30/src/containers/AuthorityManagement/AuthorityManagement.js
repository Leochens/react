import React, { Component } from 'react';
import './AuthorityManagement.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionCreators from '../../actions';
import DepartmentTree from '../../components/DepartmentTree/DepartmentTree';
import { Input, Button, Row, Col } from 'antd';

const Search = Input.Search;
class AuthorityManagement extends Component {
    componentDidMount() {
        const {
            serverActions: {
                actionFetchAuthorities
            }
        } = this.props;
        actionFetchAuthorities
            && actionFetchAuthorities();//数据写死了
    }
    render() {
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

                        </Row>
                    </Col >
                    <Col span={12}>
                        <Col span={8} className="auth-tree">
                            <DepartmentTree
                                departmentTree={this.props.departmentTree} />
                        </Col>
                        <Col span={16}>
                            efew
                        </Col>

                    </Col>
                </Row>
            </div>
        )
    }
}


const getNode = (root, entity) => {

    const { departments, admins } = entity;
    const { childs, users } = root;
    if (childs.length === 0) {
        console.log('最底层', root);
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
            AuthorityTreeRoot
        },
        entitiesReducer: {
            admins,
            departments
        }
    } = state;
    // console.log('组装前', AuthorityTreeRoot, admins, departments);
    const root = departments[AuthorityTreeRoot.pop()]; //根实体
    console.log('根实体', root);
    if (!root) {
            // console.log('根实体是null');
            return {}
        }
    const tree = recursionMapTree(root, { admins, departments });
    console.log('tree here', tree);
    return {
        departmentTree: tree
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorityManagement);