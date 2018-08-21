import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import Carousel from '../Carousel/Carousel';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import CommentInputBox from '../CommentInputBox/CommentInputBox';
import { Col, Row } from "antd";

import './ReviewBox.css';

export default class ReviewBox extends Component {


    render() {
        const { data, commentActions } = this.props;
        return (
            <Row className="review-box">
                <Col span={16}>
                    <Carousel photoList={data.photos} />
                    <HomeworkDetails
                        data={data}
                        switchActions={this.props.switchActions} />
                    <CommentInputBox
                        commentActions={commentActions}
                        homeworkId={data.id}
                    />
                </Col>
                <Col span={8}>
                    <CommentList
                        data={data.comments}
                        commentActions={commentActions} />
                </Col>
            </Row>
        )
    }
}