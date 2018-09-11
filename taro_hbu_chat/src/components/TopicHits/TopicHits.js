import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './TopicHits.less';

export default class TopicHits extends Component {


  render() {
    const { hitUserList } = this.props;
    const hitCount = hitUserList.length;
    return hitCount === 0
      ? null
      : (
        <View className="topic-hits">
          {hitUserList.map((user, idx) => {
            let comma = ','
            if (idx === hitUserList.length - 1) {
              comma = '';
            }
            return (
              <Text key={idx}> <a>{user.nick}</a> {comma}</Text>
            )
          })} 等 {hitCount} 人觉得很赞。
            </View>
      )
  }
}