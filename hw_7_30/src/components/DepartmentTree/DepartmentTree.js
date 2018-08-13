import React, { Component } from 'react';
import './DepartmentTree.css';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class DepartmentTree extends Component {
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    loop = data => data.map((item) => {
        if (!item) return null;
        // console.log('???????==>', item);
        if (item.childs && item.childs.length) {
            return <TreeNode key={item.id} title={item.name}>{this.loop(item.childs)}</TreeNode>;
        }
        return <TreeNode key={item.id} title={item.name} />;
    });
    render() {
        const { departmentTree } = this.props;
        // console.log('假的树', departmentTree);
        return (
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={['102']}
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