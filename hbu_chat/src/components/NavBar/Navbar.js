import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './NavBar.less'
class _NavBar extends Component {
    render() {
        return (
            <div>
                <NavBar
                 className="nav"
                    mode="light"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >河大论坛</NavBar>
            </div>
        )
    }
}



export default _NavBar;