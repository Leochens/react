import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import {  Col, Row, Avatar, Input, Icon, Switch, } from "antd";
import { getLocalTime } from '../../tools/dateTools';

import './ReviewBox.css';

export default class ReviewBox extends Component {
    renderPhotos = () => {
        const { data: {
            photos: photoList
        } } = this.props

        return photoList.map((item,idx) => {
            return (
                <span key={idx} className="photo-wraper">
                    <img alt="" className="photo-item" src={item} />
                </span>
            )
        })
    }
    handleToggleExcellent = () => {
        const { switchActions,data:{
            id
        } } = this.props;
        switchActions.actionToggleExcellent(id);
    }
    render() {
        const { data } = this.props
        return (
            <div>
                <Row>
                    <div className="review-box">

                        <Col span={16}>
                            <div className="homework-photos">
                                {this.renderPhotos()}
                            </div>
                            <div className="studentInfo">
                                <span>NO.{data.id}</span> <Avatar 
                                src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533645592226&di=fd7a29a40669186b181b222c70081836&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F267f9e2f07082838304837cfb499a9014d08f1a0.jpg'}
                                size="default" shape="square" 
                                style={{margin:'0 5px'}}/>
                                <div className="homework-info">
                                    <div>作业: {data.description}</div>
                                    <div>{data.author.nick} &nbsp;
                                    mid: {data.author.mid} {data.classInfo.name}|{data.teacherInfo.nick}&nbsp;
                                    点评人: {data.commentator} &nbsp;
                                    提交时间: {getLocalTime(data.time)}

                                    </div>
                                </div>
                                <span className="excellent">
                                    佳作 <Switch
                                        onChange={this.handleToggleExcellent}
                                        defaultChecked={data.isExcellent} />

                                </span>
                            </div>
                            <div>
                                <Input
                                    addonAfter={<div><Icon type="check-circle-o" /> 发送</div>} />
                            </div>
                        </Col>
                        <Col span={8}>
                            <CommentList
                                data={data.comments} />
                        </Col>
                    </div>

                </Row>
            </div>
        )
    }
}