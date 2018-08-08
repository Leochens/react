import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import Carousel from '../Carousel/Carousel';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails'
import { Col, Row, Input, Icon, } from "antd";

import './ReviewBox.css';

export default class ReviewBox extends Component {


    render() {
        const { data, commentActions } = this.props;
        return (
            <div>
                <Row>
                    <div className="review-box">
                        <Col span={16}>
                            <Carousel photoList={data.photos} />
                            <HomeworkDetails
                                data={data}
                                switchActions={this.props.switchActions} />
                            <div>
                                <Input
                                    addonAfter={<div><Icon type="check-circle-o" /> 发送</div>} />
                            </div>
                        </Col>
                        <Col span={8}>
                            <CommentList
                                data={data.comments}
                                commentActions={commentActions} />
                        </Col>
                    </div>

                </Row>
            </div>
        )
    }
}