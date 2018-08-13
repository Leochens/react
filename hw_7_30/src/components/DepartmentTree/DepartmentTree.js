import React, { Component } from 'react';
import './DepartmentTree.css';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class DepartmentTree extends Component {
    onSelect = (selectedKeys, info) => {
        const {
            switchActions: {
                actionSelectDepartment
            }
        } = this.props;
        actionSelectDepartment &&
            actionSelectDepartment(parseInt(selectedKeys))
    }
    loop = data => data.map((item) => {
        if (!item) return null;
        if (item.childs && item.childs.length) {
            return <TreeNode
                key={item.id}
                title={item.name}
                users={item.users}
            >{this.loop(item.childs)}</TreeNode>;
        }
        return <TreeNode key={item.id} title={item.name} />
    });
    render() {
        const { departmentTree } = this.props;
        return (
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={['101']}
                    onSelect={this.onSelect}
                >
                    <TreeNode title="全部部门"
                        key="101">

                        {!departmentTree
                            ? null
                            : this.loop(departmentTree)
                        }
                    </TreeNode>
                </Tree>
            </div >
        )
    }
}