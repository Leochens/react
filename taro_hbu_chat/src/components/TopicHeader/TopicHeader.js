import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'

import './TopicHeader.less';
export default class TopicHeader extends Component {
  render() {
    const {
      userPhoto,
      userNick,
      publicTime
    } = this.props;
    return (
      <View className="topic-header">
        <span className="user-photo">
          <img src={userPhoto} alt="" />
        </span>
        <View className="header-content">
          <View className="user-nick">{userNick}</View>
          <View className="public-time">{publicTime}</View>
        </View>
        <View className="more">
          {/* <Icon type="ellipsis" /> */}
         
        </View>
      </View>
    )
  }
}