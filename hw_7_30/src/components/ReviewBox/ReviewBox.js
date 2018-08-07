import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import { Carousel, Col, Row, Avatar, Input, Icon, Switch, } from "antd";
import { getLocalTime } from '../../tools/dateTools';

import './ReviewBox.css';

export default class ReviewBox extends Component {
    renderPhotos = () => {
        const { data: {
            photos: photoList
        } } = this.props

        return photoList.map((item) => {
            return (
                <span className="photo-wraper">
                    <img className="photo-item" src={item} />
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
                                {/* <Carousel
                                autoplay> */}
                                {this.renderPhotos()}
                            {/* </Carousel> */}
                            </div>
                            <div className="studentInfo">
                                <span>NO.{data.id}</span> <Avatar size="small" shape="square" />
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