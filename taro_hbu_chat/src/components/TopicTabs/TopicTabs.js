import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './TopicTabs.less';
import CommentInput from '../CommentInput/CommentInput';

export default class TopicTabs extends Component {
    state = {
        commentInputIsActive: false
    }
    handleCommentTopic = () => {
        this.toggleCommentInputActive();
       
    }
    toggleCommentInputActive = () => {
        this.setState({
            commentInputIsActive: !this.state.commentInputIsActive
        })
    }
    handleHitTopic = () => {
        const {
            topicId,
            TopicActions: {
                actionHitTopic
            }
        } = this.props;
        const who = 1;
        actionHitTopic && actionHitTopic(topicId, who);

    }

    renderCommentInput = () => {

        const { commentInputIsActive } = this.state;
        if (commentInputIsActive) {
            return <CommentInput 
                {...this.props}
                onHideInput = { this.toggleCommentInputActive }
            />
        } else return null;

    }
    render() {
        return (
            <View className="topic-tabs-wrapper">
                <View className="topic-tabs">
                    <span
                        className="topic-tabs-item"
                    >
                        分享
                </span>
                    <span
                        className="topic-tabs-item"
                        onClick={this.handleCommentTopic}>
                        评论
                </span>
                    <span
                        className="topic-tabs-item"
                        onClick={this.handleHitTopic}
                    >
                        赞
                </span>
                </View>
                {this.renderCommentInput()}

            </View>

        )
    }
}