import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Tabs, Row, Col, Input, Select } from 'antd'
import allActionCreators from '../../actions';
import ReviewBoxList from '../../components/ReviewBoxList/ReviewBoxList';
import { REVIEW } from '../../config';
import './style.css';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;
const select = (
    <Select defaultValue="mid" style={{ width: 100}}
    // onChange={}
    >
        <Option value="mid">mid</Option>
        <Option value="student">学员名</Option>
        <Option value="kay">关键词</Option>
    </Select>
);
class HomeworkReview extends Component {
    // renderTabs = () => {
    //     return [1, 2, 3, 4].map(id => {
    //         return (
    //         <TabPane key={id}>

    //         </TabPane>
    //         )
    //     })
    // }
    render() {
        console.log(this.props);
        const filterRules = {
            user_unreview: {
                token: 1,
                isReviewed: 0
            },
            user_reviewed: {
                token: 1,
                isReviewed: 1
            },
            all_unreview: {
                token: 0,
                isReviewed: 0
            },
            all_reviewed: {
                token: 0,
                isReviewed: 1
            }
        }
        return (
            <div>
                <Row className="review-header">
                    <Col span={8} offset={16}>
                        <Search
                            addonBefore={select}
                            placeholder="input search text"
                            // onSearch={this.handleSearch.bind(this)}
                            style={{ width: 200 }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Tabs
                            defaultActiveKey="1">
                            <TabPane key="1" tab={REVIEW.USER_UNREVIEW}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    filterRules={filterRules.user_unreview}
                                    data={this.props.data}
                                />
                            </TabPane>
                            <TabPane key="2" tab={REVIEW.USER_REVIEWED}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    filterRules={filterRules.user_reviewed}
                                    data={this.props.data}
                                />
                            </TabPane>
                            <TabPane key="3" tab={REVIEW.ALL_UNREVIEW}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    filterRules={filterRules.all_unreview}
                                    data={this.props.data}
                                />
                            </TabPane>
                            <TabPane key="4" tab={REVIEW.ALL_REVIEWED}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    filterRules={filterRules.all_reviewed}
                                    data={this.props.data}
                                />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>


            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        entitiesReducer: {
            classes,
            teachers,
            comments,
            homeworks
        },
        homeworkReviewReducer: homeworkIds
    } = state;
    const data = homeworkIds.map(id => { //组装
        const {
            classInfo: classId,
            teacherInfo: teacherId,
            comments: commentIdList
        } = homeworks[id];
        const _comments = commentIdList.map(id => comments[id]);//映射评论
        return {
            ...homeworks[id],
            classInfo: classes[classId],
            teacherInfo: teachers[teacherId],
            comments: _comments
        }
    })
    return {
        data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch),
        switchActions: bindActionCreators(allActionCreators.switchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);
