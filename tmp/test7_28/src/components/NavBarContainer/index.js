
import React, { Component } from 'react';
import { Modal,Toast, Button, NavBar, Icon, WingBlank, WhiteSpace } from 'antd-mobile';



export default class _NavBar extends Component {

    showModal = () => {
        const prompt = Modal.prompt;
        prompt(
            '添加事项',
            '请输入你的待办',
            [
                { text: '取消' },
                { text: '提交', onPress: password => console.log(`新的事项:${password}`) },
            ],
            'text',
        )
    }
    render() {
        const add = <Icon key='0' type='plus' 
        onClick={this.showModal}
        > </Icon>
        const more = <Icon key="1" type="ellipsis" style={{ marginLeft: '16px' }} />
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        add,
                        more
                    ]}
                >


                    Todo代办事项
                </NavBar>
            </div>
        )
    }
}