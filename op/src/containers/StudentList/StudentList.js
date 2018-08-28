import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col, Table, Button, Input, Select } from 'antd';
import { browserHistory as history } from 'react-router'
import headList from './headList';
import './StudentList.css';
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
            <div className="butons-wrapper">
                <Button>汇总</Button>
                <Button style={{
                    backgroundColor: "#aaa"
                }}>摄影课</Button>
                <Button>绘画课</Button>
                <Search
                    className="student-list-search"
                    addonBefore={select}
                    placeholder="input search text"
                    onSearch={this.handleSearch.bind(this)}
                    style={{ width: 200,float:'right' }}
                />
                <Button onClick={this.props.router.goBack}>返回</Button>
            </div>
        )
    }
    rowKey = (record, i) => `${record.mid}_${i}`
    render() {
        const { studentList: renderList } = this.props;
        return (
            <div >
                <Row >
                    <Col span={20} offset={2}>
                        <Row>{this.renderButtonBox()}</Row>
                        <Table
                            rowKey={this.rowKey}
                            dataSource={renderList}
                            columns={headList}
                            onRow={(record) => {
                                return {
                                    onClick: () => {
                                        history.push(`/classInfo-${record.mid}-${record.nick}`)
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
    const {
        studentListReducer: {
            studentIds,
            searchResultIds,
            isSearching
        },
        entitiesReducer: {
            students: {
                entities: students
            }
        }
    } = state;

    //根据是否是搜索状态来判断渲染哪个列表
    return {
        studentList: isSearching ?
            searchResultIds.map(id => students[id]) :
            studentIds.map(id => students[id])
    };
}
const mapDispatchToProps = dispatch => {
    return {
        serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
        searchAction: bindActionCreators(allActionsCreators.searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
