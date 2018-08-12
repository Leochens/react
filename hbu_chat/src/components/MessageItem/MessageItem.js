import React, { Component } from 'react';
import './MessageItem.less';
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
export default class MessageItem extends Component {
    render() {
        return (
            <div className="msg-item-wraper">
                <TopicHeader
                    userPhoto={'http://pic.kuaizhan.com/g2/M01/92/B4/CgpQVFoVe_GAcS0aAAEkci6rUXU834.JPG/imageView/v1/thumbnail/304x304'}
                    userNick={'啦啦啦'}
                    publicTime={'2018-8-15'}
                />
                <TopicContent
                    content={`假期已经过去一个礼拜了 
                    回到了富有古城韵味的慢生活的泉州～`}
                    pics={data}
                />
                <TopicComment
                />
                <TopicTabs
                    tabs={tabs}
                />
            </div>
        )
    }
}