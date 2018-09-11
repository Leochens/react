import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './TopicComment.less';
import CommentInput from '../CommentInput/CommentInput';
// import { Icon } from 'antd-mobile';
let id = 7001;
export default class TopicComment extends Component {
  static defaultProps = {
    comments: []
  }
  state = {
    commentInputIsActive: false,
    receiver: null,
    commentator: 2
  }

  handleShowCommentInput = () => {
    this.setState({
      commentInputIsActive: true
    })
  }
  handleHideCommentInput = () => {
    this.setState({
      commentInputIsActive: false
    })
  }

  handleReplyComment = (receiver) => {
    this.handleShowCommentInput();
    this.setState({
      receiver
    })
  }

  render() {
    const { comments } = this.props;
    const {
      commentInputIsActive,
      receiver
    } = this.state;
    if (Array.isArray(comments) && comments.length === 0) {
      return null;
    }
    return (
      <View className="topic-comments">
        <View className="topic-comment-items"
          key={id}>
          <span className="topic-commentor"
            onClick={this.handleReplyComment.bind(this,item.commentator)}
          >{item.commentator.nick}</span>
          {
            item.to
              ? <span> 回复 <span className="topic-commentor"
                onClick={this.handleReplyComment.bind(this,item.to)}
              >{item.to.nick}</span> </span>
              : null
          }
          : <span >{item.comment_content}</span>
        </View>
        {commentInputIsActive
          ? <CommentInput
            topicId={this.props.topicId}
            TopicActions={this.props.TopicActions}
            receiver={receiver}
            placeholder={`回复 ${receiver.nick}:`}
            onHideInput={this.handleHideCommentInput}
          /> : null
        }
      </View>
    )
  }
}