import React, { Component } from 'react';
import './DepartmentTree.css';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class DepartmentTree extends Component {
    // 得到所选菜单的id后 发action
    // BUG HERE > 由于Antd APi原因 暂不支持重复点击同一菜单
    onSelect = (selectedKeys, info) => {
        const {
            switchActions: {
                actionSelectDepartment
            }
        } = this.props;
        console.log(selectedKeys);
        actionSelectDepartment &&
            actionSelectDepartment(parseInt(selectedKeys))
    }

    //递归输出树节点
    loop = (data) => {
        return data.map((item) => {
            if (!item) return null;
            if (item.children && item.children.length) {
                return <TreeNode
                    key={item.id}
                    title={item.name}
                >{this.loop(item.children)}</TreeNode>;
            }
            return <TreeNode key={item.id} title={item.name} />
        })
    }
    render() {
        const { departmentTree } = this.props;
        // const { id } = departmentTree;
        // //拿到树的根节点的id作为默认展开项
        // const defaultExpandedKeys = id
        //     ? id.toString()
        //     : null
        return (
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={['101']}
                    onSelect={this.onSelect}
                >
                    {!departmentTree
                        ? null
                        : this.loop([departmentTree])
                    }

                </Tree>
            </div >
        )
    }
}