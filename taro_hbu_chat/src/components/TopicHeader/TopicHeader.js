import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './TopicHeader.less';
import { Icon, Popover } from 'antd-mobile';
import MorePopover from '../MorePopover/MorePopover';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const topicPopoverItems = [
    <Item key="1"
        value="scan"
        icon={myImg('tOtXhkIWzwotgGSeptou')}
        data-seed="logId">分享</Item>,

    <Item key="2"
        value="special"
        icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
        style={{ whiteSpace: 'nowrap' }}>收藏</Item>,

    <Item key="3"
        value="button ct"
        icon={myImg('uQIYTFeRrjPELImDRrPt')}
    ><span style={{ marginRight: 5 }}>举报</span>
    </Item>

]
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
                    <MorePopover
                        topicPopoverItems={topicPopoverItems}
                    />
                </View>
            </View>
        )
    }
}