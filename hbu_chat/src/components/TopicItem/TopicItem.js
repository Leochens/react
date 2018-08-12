import React, { Component } from 'react';
import './TopicItem.less';
import TopicHeader from '../TopicHeader/TopicHeader';
import TopicContent from '../TopicContent/TopicContent';
import TopicComment from '../TopicComment/TopicComment';
import TopicTabs from '../TopicTabs/TopicTabs';
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'http://pic.kuaizhan.com/g3/73/66/7d30-de74-49b5-b2d0-0f306fda35a642.jpeg/imageView/v1/thumbnail/200x200',
}));

const tabs = [
    {
        title: '分享'
    },
    {
        title: '评论'
    },
    {
        title: '赞'
    }

]
export default class TopicItem extends Component {
    render() {
        const {
            data: {
                id,
                user_info,
                content,
                comments,
                public_time,
                isHot
            }
        } = this.props;
        return (
            <div className="msg-item-wraper">
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
                    tabs={tabs}
                />
                <TopicComment
                    topicId={id}
                    topicAuthorId={user_info.id}
                    comments={comments}
                />
               
            </div>
        )
    }
}