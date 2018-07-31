import React, { Component } from 'react';
import './Head.css';
import { Avatar, Row, Col, Icon, Input, Spin } from 'antd';
import { USER_INFO } from '../../const/config';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.tmp = '';
    }
    onLoading = () => {
        return <div className="loading"><Spin /></div>;
    }
    onInputChange = e => {
        this.tmp = e.target.value;
        console.log(this.tmp);
    }

    handleChangeDynamicData = (item) => {
        const { inputAction } = this.props;
        inputAction.actionChangeDynamicData &&
            inputAction.actionChangeDynamicData(item, this.tmp);
        this.tmp = '';
    }
    handleToggleInput = (name) => {
        const { inputAction } = this.props;
        inputAction.actionToggleDynamicEdit &&
            inputAction.actionToggleDynamicEdit(name);
    }
    renderDynamicInfos = () => {
        const { userInfo } = this.props.headData;
        return (
            <div>
                {this.renderDynamicInfoItem(USER_INFO.TEL, userInfo.tel, 'tel')}
                {this.renderDynamicInfoItem(USER_INFO.WEICHAT_CODE, userInfo.weiChatCode, 'weiChatCode')}
                {this.renderDynamicInfoItem(USER_INFO.REMARK, userInfo.remark, 'remark')}
            </div>
        )
    }
    renderDynamicInfoItem = (title, text, name) => {
        const { dynamicInfoEditMap } = this.props;
        if (dynamicInfoEditMap[name]) {
            return (
                <span onChange={this.onInputChange}>
                    <Input size="small"
                        placeholder={title}
                        addonAfter={
                            <span onClick={this.handleChangeDynamicData.bind(this, name)}>
                                <Icon type="check" />
                            </span>}
                    /></span>
            )
        } else {
            return (
                <Col span={16}>
                    {title} : {text}
                    <span onClick={this.handleToggleInput.bind(this, name)}><Icon type="edit" /></span>
                </Col>
            )
        }
    }
    render() {

        const { userInfo, headLoading } = this.props.headData;
        return (

            <div className="head">
                {
                    headLoading === true ? this.onLoading() :
                        <Row>
                            <Col span={4} >
                                <Avatar
                                    src={userInfo.hurl}
                                    style={{ width: 130, height: 110 }}
                                    shape='square'></Avatar>
                            </Col>
                            <Col span={20}>

                                <div className="user-profile">
                                    <div className="user-name">{userInfo.nick}</div>
                                    <div className="user-info">
                                        <div className="static-infos">
                                            <Col span={12}>
                                                <Col span={12}>
                                                    {USER_INFO.ID}:{userInfo.mid}
                                                </Col>
                                                <Col span={12}>
                                                    {USER_INFO.HISTORY_PAY}:{userInfo.history_pay}
                                                </Col>
                                                <Col span={12}>
                                                    {USER_INFO.ENTER_DATE}:{userInfo.enterDate}
                                                </Col>
                                                <Col span={12}>
                                                    {USER_INFO.LEARNING_LESSON}:{userInfo.learningLesson.toString()}
                                                </Col>
                                                <Col span={12}>
                                                    {USER_INFO.LAST_LOGIN_DATE}:{userInfo.lastLoginDate}
                                                </Col>
                                                <Col span={12}>
                                                    {USER_INFO.TOTAL_LEARNING_DAYS}:{userInfo.totalLearningDays}
                                                </Col>
                                            </Col>
                                        </div>
                                        <div className="dynamic-infos">
                                            <Col span={8}>
                                                {this.renderDynamicInfos()}
                                            </Col>
                                        </div>
                                    </div>

                                </div>


                            </Col>
                        </Row>
                }

            </div>
        )
    }
}
