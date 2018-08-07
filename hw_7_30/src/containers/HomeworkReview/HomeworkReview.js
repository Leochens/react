import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { List, Tabs } from 'antd'
import allActionCreators from '../../actions';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import { REVIEW } from '../../config';
const TabPane = Tabs.TabPane;
const Item = List.Item
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
                        <ReviewBox
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.user_unreview}
                        />
                    </TabPane>
                    <TabPane key="2" tab={REVIEW.USER_REVIEWED}>
                        <ReviewBox
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.user_reviewed}
                        />
                    </TabPane>
                    <TabPane key="3" tab={REVIEW.ALL_UNREVIEW}>
                        <ReviewBox
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.all_unreview}
                        />
                    </TabPane>
                    <TabPane key="4" tab={REVIEW.ALL_REVIEWED}>
                        <ReviewBox
                            serverActions={this.props.serverActions}
                            filterRules={filterRules.all_reviewed}
                        />
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);

