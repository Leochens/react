import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { NavBar, Icon } from 'antd-mobile';
import './NavBar.less'
class _NavBar extends Component {
    render() {
        return (
            <View>
                <NavBar
                 className="nav"
                    mode="light"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >河大论坛</NavBar>
            </View>
        )
    }
}



export default _NavBar;