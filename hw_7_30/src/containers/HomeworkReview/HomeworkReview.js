import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Tabs, Row, Col, Input, Select, Badge } from 'antd'
import allActionCreators from '../../actions';
import ReviewBoxList from '../../components/ReviewBoxList/ReviewBoxList';
import { REVIEW } from '../../config';
import './style.css';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;
const select = (
    <Select defaultValue="mid" style={{ width: 70 }}
    // onChange={}
    >
        <Option value="mid">mid</Option>
        <Option value="student">学员名</Option>
        <Option value="kay">关键词</Option>
    </Select>
);
const badge = (text, count) => {
    return (
        <Badge className="badge" count={count}>{text}</Badge>
    )
}
class HomeworkReview extends Component {
    handleSearch = (id) => {
        const { searchAction } = this.props;

    }
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
                    <Col span={8} offset={18}>
                        <Search
                            addonBefore={select}
                            placeholder="input search text"
                            onSearch={this.handleSearch}
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
                                    commentActions={this.props.commentActions}
                                    filterRules={filterRules.user_unreview}
                                    data={this.props._userUnreview}
                                />
                            </TabPane>
                            <TabPane key="2" tab={REVIEW.USER_REVIEWED}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    commentActions={this.props.commentActions}
                                    filterRules={filterRules.user_reviewed}
                                    data={this.props._userReviewed}
                                />
                            </TabPane>
                            <TabPane key="3" tab={REVIEW.ALL_UNREVIEW}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    commentActions={this.props.commentActions}
                                    filterRules={filterRules.all_unreview}
                                    data={this.props._allUnreview}
                                />
                            </TabPane>
                            <TabPane key="4" tab={REVIEW.ALL_REVIEWED}>
                                <ReviewBoxList
                                    serverActions={this.props.serverActions}
                                    switchActions={this.props.switchActions}
                                    commentActions={this.props.commentActions}
                                    filterRules={filterRules.all_reviewed}
                                    data={this.props._allReviewed}
                                />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>


            </div>
        )
    }
}
const mapEntities = (ids, entity) => {
    const {
        classes,
        teachers,
        comments,
        homeworks
    } = entity;
    const data = ids.map(id => { //组装 
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
    return data;
}
const mapStateToProps = state => {
    const {
        entitiesReducer,
        homeworkReviewReducer: {
            userUnreview,
            userReviewed,
            allUnreview,
            allReviewed
        }
    } = state;
    const _userUnreview = mapEntities(userUnreview, entitiesReducer);
    const _userReviewed = mapEntities(userReviewed, entitiesReducer);
    const _allUnreview = mapEntities(allUnreview, entitiesReducer);
    const _allReviewed = mapEntities(allReviewed, entitiesReducer);

    return {
        _userUnreview,
        _userReviewed,
        _allUnreview,
        _allReviewed
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch),
        switchActions: bindActionCreators(allActionCreators.switchAction, dispatch),
        searchAction: bindActionCreators(allActionCreators.searchAction, dispatch),
        commentActions: bindActionCreators(allActionCreators.commentAction, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);

