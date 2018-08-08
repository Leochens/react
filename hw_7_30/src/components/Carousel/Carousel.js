import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Carousel.css';

export default class _Carousel extends Component {
    renderCarousel() {
        const {
            photoList
        } = this.props

        return photoList.map((item, idx) => {
            return (
                <span key={idx} className="photo-wraper">
                    <img alt="" className="photo-item" src={item} />
                </span>

            )
        })
    }
    render() {
        return (
            <div className="homework-photos">
                {this.renderCarousel()}
            </div>
        )
    }
}