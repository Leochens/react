import React, { Component } from 'react';
import './MemberSelectBox';
import { Button, Input, Row } from 'antd'
const Search = Input.Search;
export default class MemberSelectBox extends Component {

    state = {
        selectedMemberIds: [],      //选中的成员id
        searchResult: [],           //过滤搜索结果
        stateMap: {}                //判断当前按钮是否选中
    }

    //外部传入回调函数来获取本组件内已经生成好的选中ids 并处理
    handleDealMembers = () => {
        const { action } = this.props;
        action && action(this.state.selectedMemberIds);

        //一个大操作结束后置回初始值
        this.setState({
            selectedMemberIds: [],
            searchResult: [],
            stateMap: {}
        })
    }

    //用户点击按钮进行选择
    handelSelectMember = (id) => {
        const newIds = this.state.selectedMemberIds.slice();
        let selectedFlag = false;
        //没有就添加 有就删除  动态改变最终的selectedMemberIds
        if (newIds.includes(id)) {
            newIds.splice(newIds.indexOf(id), 1);
            selectedFlag = false;
        } else {
            newIds.push(id);
            selectedFlag = true;
        }
        //被选中的人员对应状态会被置为不同bool值
        this.setState({
            selectedMemberIds: newIds,
            stateMap: {
                ...this.state.stateMap,
                [id]: selectedFlag
            }
        })
    }

    //搜索 根据人名或者id
    handleSearchMember = (v) => {
        const { members } = this.props;
        const res = members.filter(member => {
            return member.name.indexOf(v) !== -1 || member.id.toString() === v
        })
        console.log('res', res);
        this.setState({
            searchResult: res
        })
    }
    renderMembers = () => {
        const {
            members,
            showDisable
        } = this.props;

        if (!members) return null;
        const { searchResult } = this.state;
        return (searchResult.length !== 0 ? searchResult : members).map((item, id) => {
            return <span
                key={id}
                onClick={() => this.handelSelectMember(item.id)}
            ><Button
                style={ //根据判断状态表中的对应id的状态 来决定是否渲染背景色
                    { 
                        backgroundColor: this.state.stateMap[item.id] ? '#ddd' : null,
                        margin: 10
                }
                }
                disabled={
                    showDisable
                        ? item.isSelected
                            ? true
                            : false
                        : false
                }
            >
                   {item.name}{item.id}
                </Button>
            </span>
        })
    }

    render() {
        const { title } = this.props;
        return (
            <div>
                <Row  >
                    <Search
                        placeholder="输入姓名或id进行搜索"
                        onSearch={this.handleSearchMember}
                        style={{ width: '80%' }}
                    />
                    <Button
                        onClick={this.handleDealMembers}
                    >{title}</Button>
                </Row>
                {this.renderMembers()}
            </div>
        )
    }
}