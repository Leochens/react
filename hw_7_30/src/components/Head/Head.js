import React, { Component } from 'react';
import './Head.css';
import { Avatar, Row, Col, Icon } from 'antd';


export default class Head extends Component {
    constructor(props) {
        super(props);
        this.tmp = '';

    }
    onInputChange = e => {
        this.tmp = e.target.value;
    }

    handleChangeDynamicData = (item) => {
        const { inputAction } = this.props;
        inputAction.actionChangeDynamicData &&
            inputAction.actionChangeDynamicData(item, this.tmp);
        this.tmp = '';
    }
    renderDynamicInfos = () => {
        const { userInfo } = this.props.headData;
        return (
            <div>
                <Col span={16}>
                    手机号码 : {userInfo.tel}
                    <span><Icon type="edit" /></span>
                </Col>
                <Col span={16}>
                    微信号码 : {userInfo.weiChatCode}
                    <span><Icon type="edit" /></span>
                </Col>
                <Col span={16}>
                    备注 : {userInfo.remark}
                    <span><Icon type="edit" /></span>
                </Col>
            </div>
        )
    }

    render() {
        const { userInfo } = this.props.headData;
        return (
            <div className="head">
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
                                            学员编号:MID112335
                                            </Col>
                                        <Col span={12}>
                                            历史付费额:{userInfo.history_pay}
                                        </Col>
                                        <Col span={12}>
                                            入学时间:{userInfo.enterDate}
                                        </Col>
                                        <Col span={12}>
                                            在学课程:{userInfo.learningLesson.toString()}
                                        </Col>
                                        <Col span={12}>
                                            最后登录时间:{userInfo.lastLoginDate}
                                        </Col>
                                        <Col span={12}>
                                            累计学习天数:{userInfo.totalLearningDays}
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
            </div>
        )
    }
}
