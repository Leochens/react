import React, { Component } from 'react';
import { Carousel } from 'antd';
import ViewLargerImg from '../../tools/ViewlargerImg';
import './Carousel.css';

export default class _Carousel extends Component {

    state = {
        showModal: false,
        picSrc: ''
    }
    toggleView = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    setPicSrc = (src) => {
        this.setState({
            picSrc: src
        })
    }
    showView = (src) => {
        this.setPicSrc(src);
        this.toggleView();
    }
    renderCarousel() {
        const {
            photoList
        } = this.props

        return photoList.map((item, idx) => {
            return (
                <span
                    onClick={this.showView.bind(this, item)}
                    key={idx} className="photo-wraper">
                    <img key={idx} alt="" className="photo-item" src={item} />
                </span>
            )
        })
    }
    render() {
        return (
            <div className="homework-photos">
                <Carousel
                    autoplay >
                    {this.renderCarousel()}
                </Carousel>
                <ViewLargerImg
                    src={this.state.picSrc}
                    visible={this.state.showModal}
                    toggle={this.toggleView} />
            </div>
        )
    }
}