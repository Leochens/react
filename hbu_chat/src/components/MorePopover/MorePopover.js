import React, { Component } from 'react';
import { Icon, Popover } from 'antd-mobile';
import './MorePopover.less';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export default class MorePopover extends Component {

    state = {
        popoverVisible: true,
        selected: '',
    };

    onSelect = (opt) => {
        console.log(opt.props.value);
        this.setState({
            popoverVisible: false,
            selected: opt.props.value,
        });
    };
    handlepopoverVisibleChange = (popoverVisible) => {
        this.setState({
          popoverVisible,
        });
      };
    render() {
        const { topicPopoverItems } = this.props;
        return (
            <Popover mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                popoverVisible={this.state.popoverVisible}
                overlay={topicPopoverItems}
                align={{
                    overflow: { adjustY: 0, adjustX: 0 },
                    offset: [-10, 0],
                }}
            onpopoverVisibleChange={this.handlepopoverVisibleChange}
            onSelect={this.onSelect}
            >
                <div style={{
                    height: '100%',
                    padding: '0 15px',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                    <Icon type="ellipsis" />
                </div>
            </Popover>
        )
    }
}