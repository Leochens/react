import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './TopicContent.less';
import { Grid } from 'antd-mobile';
export default class TopicContent extends Component {
  render() {
    const { content, pics } = this.props;
    // function renderItem(item) {
    //   return (
    //     <View className="topic-pics-item">
    //       <Image src={item} />
    //     </View>
    //   )
    // }
    return (
      <View className="topic-content">
        <p className="topic-text">
          {content}
        </p>
        <View className="topic-pics">
          {/* <Grid data={pics} columnNum={3}
            // renderItem={renderItem}
            hasLine={false}
          /> */}
        </View>
      </View>
    )
  }
}