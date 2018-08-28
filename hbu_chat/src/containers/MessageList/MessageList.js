import React, { Component } from 'react';
// import { Button } from 'antd-mobile';
import Actions from '../../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MessageList.less'
import TopicItem from '../../components/TopicItem/TopicItem';
class MessageList extends Component {

    componentDidMount() {
        const { ServerActions } = this.props;
        ServerActions.actionFetchTopics();
    }
    renderTopicList = () => {
        const { topicList } = this.props;
        return topicList.map((item, id) => <TopicItem
            key={id}
            TopicActions={this.props.TopicActions}
            data={item} />)
    }
    render() {
        console.log('组装后数据：', this.props.topicList);
        return (
            <div className="msg-list">
                {this.renderTopicList()}
            </div>
        )
    }
}
const mapStateToProps = state => {

    const {
        topicList: topicIds,
        entities: {
            users,
            comments,
            topics
        }
    } = state;

    const topicList = topicIds.map(id => {
        const {
            user_info: userId,
            comments: commentIds,
            hits: hitsUserIds
        } = topics[id];
        const commentList = commentIds.map(id => {
            const {
                commentator: commentatorId,
                to: receiverId
            } = comments[id];
            return {
                ...comments[id],
                commentator: users[commentatorId],
                to: users[receiverId]
            }
        })
        const hitsUserList = hitsUserIds.map(userId => users[userId]);
        return {
            ...topics[id],
            user_info: users[userId],
            comments: commentList,
            hits: hitsUserList
        }
    })
    return {
        topicList,
        users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ServerActions: bindActionCreators(Actions.ServerActions, dispatch),
        TopicActions: bindActionCreators(Actions.TopicActions, dispatch),
        UIActions: bindActionCreators(Actions.UIActions, dispatch ),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);


