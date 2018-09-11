import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './TopicItem.css';
import TopicHeader from '../TopicHeader/TopicHeader';
import TopicContent from '../TopicContent/TopicContent';
import TopicComment from '../TopicComment/TopicComment';
import TopicHits from '../TopicHits/TopicHits';
import TopicTabs from '../TopicTabs/TopicTabs';

export default class TopicItem extends Component {
    render() {
        const {
            data: {
                id,
                user_info,
                content,
                comments,
                public_time,
                hits,
                isHot
            },
            TopicActions
        } = this.props;
        return (
            <View className="msg-item-wraper">
                <TopicHeader
                    userPhoto={user_info.photo}
                    userNick={user_info.nick}
                    publicTime={public_time}
                />
                <TopicContent
                    content={content.text}
                    pics={content.pics}
                />
                 <TopicTabs
                    topicId={id}
                    topicAuthorId={user_info.id}
                    TopicActions = {TopicActions}
                />
                <TopicHits 
                    hitUserList = {hits}
                />
                <TopicComment
                    topicId={id}
                    topicAuthorId={user_info.id}
                    comments={comments}
                    TopicActions={TopicActions}
                />
               
            </View>
        )
    }
}