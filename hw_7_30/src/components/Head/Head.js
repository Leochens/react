import React, { Component } from 'react';
import './Head.css';
import { Avatar, Row, Col, Icon } from 'antd';
import { Input } from 'antd';
import head_pic from './img/head_pic.jpg'
export default class Head extends Component {
    constructor(props) {
        super(props);
        this.tmp = '';
    }
    onInputChange = e => {
        this.tmp = e.target.value;
    }
    renderStaticInfos = () => {
        const { staticInfos, staticInfosMap } = this.props.headData;
        const sKeys = Object.keys(staticInfos);
        return sKeys.map((item, id) => {
            return <Col span={12}
                key={id}
                className="user-info-item">
                {staticInfosMap[item]} : {staticInfos[item]}
            </Col>
        })
    }
    handleChangeDynamicData = (item) => {
        const { inputAction } = this.props;
        inputAction.actionChangeDynamicData &&
            inputAction.actionChangeDynamicData(item, this.tmp);
        this.tmp = '';


    }
    renderDynamicInfos = () => {
        const { dynamicInfos, dynamicInfosMap } = this.props.headData;
        const { inputAction } = this.props;
        const dkeys = Object.keys(dynamicInfos);
        return dkeys.map((item, id) => {
            let res = null;
            if (dynamicInfosMap[item].edit === true) {
                res = <Col span={16}
                    key={id}
                >
                    <div className="user-info-item">

                        <span>{dynamicInfosMap[item].content}:</span> &nbsp;
                        <span style={{ display: 'inline-block', width: 150 }}><Input size="small" className="inp" onChange={this.onInputChange}
                            addonAfter={
                                <span onClick={this.handleChangeDynamicData.bind(this, item)}>
                                    <Icon type="check" />
                                </span>
                            }
                            placeholder={dynamicInfosMap[item].content} /></span>
                    </div>
                </Col>
            } else {
                res = <Col span={16}
                    key={id}
                    className="user-info-item">
                    {dynamicInfosMap[item].content} : {dynamicInfos[item]}
                    <span onClick={inputAction.actionToggleDynamicEdit.bind(this, item)}>
                        <Icon type="edit" />
                    </span>
                </Col>
            }
            return res;
        })
    }
    render() {

        return (
            <div className="head">
                <Row>
                    <Col span={4} >
                        <Avatar
                            src={head_pic}
                            style={{ width: 130, height: 110 }}
                            shape='square'></Avatar>
                    </Col>
                    <Col span={20}>
                        <div className="user-profile">
                            <div className="user-name">三班人</div>
                            <div className="user-info">
                                <div className="static-infos">
                                    <Col span={12}>
                                        {this.renderStaticInfos()}
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
