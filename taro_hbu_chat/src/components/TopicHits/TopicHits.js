import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './TopicHits.less';

export default class TopicHits extends Component {

    renderHitUserList = () => {
        const { hitUserList } = this.props;
        console.log('hitUserList', hitUserList);
        return hitUserList.map((user,idx) => {
            let comma = ','
            if(idx === hitUserList.length - 1){
                comma = '';
            }
            return(
                <span key = {idx}> <a>{user.nick}</a> {comma}</span>
            )
        })
    }
    render() {
        const { hitUserList } = this.props;
        const hitCount = hitUserList.length;
        return hitCount === 0 
        ? null
        :(
            <View className="topic-hits">
                { this.renderHitUserList() } 等 {hitCount} 人觉得很赞。
            </View>
        )
    }
}