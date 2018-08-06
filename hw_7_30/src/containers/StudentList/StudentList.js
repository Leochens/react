import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col, Table, Button, Input, Select } from 'antd';
import { browserHistory as history} from 'react-router'
import headList from './headList';



class StudentList extends Component {

    componentDidMount() {
        const { serverAction } = this.props;
        serverAction.actionFetchStudentList();
    }
    handleSearch(v) {
        this.props.searchAction.actionSetSearchResult(v);
    }
    renderButtonBox() {
        const Search = Input.Search;
        const Option = Select.Option;
        const select = (
            <Select defaultValue="mid" style={{ width: 75 }}
            // onChange={}
            >
                <Option value="mid">mid</Option>
            </Select>
        );

        return (
            <div>
                <Button>汇总</Button>
                <Button style={{
                    backgroundColor: "#aaa"
                }}>摄影课</Button>
                <Button>绘画课</Button>
                <Search
                    addonBefore={select}
                    placeholder="input search text"
                    onSearch={this.handleSearch.bind(this)}
                    style={{ width: 200 }}
                />
                <Button onClick={this.props.router.goBack}>返回</Button>
            </div>
        )
    }
    rowKey = (record,i) => `${record.mid}_${i}`
    render() {
        const {
            studentList,
            searchResult,
            isSearching
        } = this.props;
        
        //根据是否是搜索状态来判断渲染哪个列表
        const renderList = isSearching ? searchResult : studentList;
        return (
            <div >
                <Row >
                    <Col span={20} offset={2}>
                        <Row>{this.renderButtonBox()}</Row>
                        <Table
                            rowKey={this.rowKey}
                            dataSource={renderList}
                            columns={headList}
                            onRow={(record)=>{
                                return {
                                    onClick:()=>{
                                        history.push( `/classInfo-${record.mid}-${record.nick}`)
                                    }
                                }
                            }}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { studentListReducer } = state;
    return {
        studentList: studentListReducer.studentIds.map(item => {
            return {
                ...studentListReducer.studentEntitis[item]
            }
        }),
        searchResult: studentListReducer.searchResult,
        isSearching: studentListReducer.isSearching
    };
}
const mapDispatchToProps = dispatch => {
    return {
        serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
        searchAction: bindActionCreators(allActionsCreators.searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
