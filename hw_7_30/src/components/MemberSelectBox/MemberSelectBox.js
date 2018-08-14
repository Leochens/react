import React, { Component } from 'react';
import './MemberSelectBox';
import { Button, Input, Row } from 'antd'
const Search = Input.Search;
export default class MemberSelectBox extends Component {

    state = {
        selectedMemberIds: [],
        searchResult: [],
        stateMap: {}
    }
    handleDealMembers = () => {
        const { action } = this.props;
        action && action(this.state.selectedMemberIds);
        this.setState({
            selectedMemberIds: [],
            searchResult: [],
            stateMap: {}
        })
    }
    handelSelectMember = (id) => {
        const newIds = this.state.selectedMemberIds.slice();
        let selectedFlag = false;
        if (newIds.includes(id)) {
            newIds.splice(newIds.indexOf(id), 1);
            selectedFlag = false;
        } else {
            newIds.push(id);
            selectedFlag = true;
        }
        this.setState({
            selectedMemberIds: newIds,
            stateMap: {
                ...this.state.stateMap,
                [id]: selectedFlag
            }
        })
    }

    handleSearchMember = (v) => {
        const { data } = this.props;
        const res = data.filter(item => {
            return item.name.indexOf(v) !== -1 || item.id.toString() === v
        })
        console.log('res', res);
        this.setState({
            searchResult: res
        })

    }
    renderMembers = () => {
        const {
            data,
            showDisable
        } = this.props;

        if (!data) return null;
        const { searchResult } = this.state;
        return (searchResult.length !== 0 ? searchResult : data).map((item, id) => {
            return <span data-flag={this.state.forthRefresh}
                key={id}
                onClick={() => this.handelSelectMember(item.id)}
            ><Button
                ref={`btn_${item.id}`} 
                style={
                    {
                        backgroundColor: this.state.stateMap[item.id] ? '#ddd' : null
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
                    {item.name}
                </Button>
            </span>
        })
    }

    render() {
        const { title } = this.props;
        console.log('cccc', this.state);
        return (
            <div>
                <Row  >
                    <Search
                        placeholder="input search text"
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