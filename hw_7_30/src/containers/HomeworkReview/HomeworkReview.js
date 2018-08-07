import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Tabs } from 'antd'
import allActionCreators from '../../actions';
import ReviewBoxList from '../../components/ReviewBoxList/ReviewBoxList';
import { REVIEW } from '../../config';
const TabPane = Tabs.TabPane;
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
                <Tabs
                    defaultActiveKey="1">
                    <TabPane key="1" tab={REVIEW.USER_UNREVIEW}>
                        <ReviewBoxList
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.user_unreview}
                            data={this.props.data}
                        />
                    </TabPane>
                    <TabPane key="2" tab={REVIEW.USER_REVIEWED}>
                        <ReviewBoxList
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.user_reviewed}
                            data={this.props.data}
                        />
                    </TabPane>
                    <TabPane key="3" tab={REVIEW.ALL_UNREVIEW}>
                        <ReviewBoxList
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.all_unreview}
                            data={this.props.data}
                        />
                    </TabPane>
                    <TabPane key="4" tab={REVIEW.ALL_REVIEWED}>
                        <ReviewBoxList
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.all_reviewed}
                            data={this.props.data}
                        />
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        entitiesReducer:{
            classes,
            teachers,
            comments,
            homeworks
        },
        homeworkReviewReducer: homeworkIds
    } = state;
    const data =  homeworkIds.map(id=>{ //组装
        const { 
            classInfo: classId,
            teacherInfo: teacherId,
            comments: commentIdList
         } = homeworks[id];
         const _comments = commentIdList.map(id=>comments[id]);//映射评论
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
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);

