import Taro, { Component } from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'
import './CommentInput.less';
export default class CommentInput extends Component {
  state = {
    inputValue: ''
  }
  handleInputChange = (v) => {
    this.setState({
      inputValue: v.target.value
    })
  }
  handleCommentTopic = () => {
    const id = new Date().getTime();    //临时时间戳id 与后台同步时调用
    const {
      topicId,
      TopicActions: {
        actionCommentTopic
      },
      onHideInput,
      receiver
    } = this.props;
    const newComment = {
      id,
      commentator: 1,
      comment_content: this.state.inputValue,
      comment_time: '6:22',
      to: receiver ? receiver.id : null
    }
    actionCommentTopic && actionCommentTopic(topicId, newComment);
    onHideInput && onHideInput();
    this.setState({
      inputValue: ''
    })
  }
  getPlaceHolder=()=>{
    const { placeholder } = this.props;
    return placeholder ? placeholder : "写点评论吧~";
  }
  render() {
    return (
      <View className="topic-comment-input">
        <Input
          focus={true}
          placeholder={this.getPlaceHolder()}
          onChange={this.handleInputChange}
        />
        <Button className="ok" onClick={this.handleCommentTopic}>{'写好啦'}</Button>
      </View>
    )
  }
}