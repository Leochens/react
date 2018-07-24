import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

import './List.css';

export default class List extends Component {

    //...props 直接传给下一级
    renderListItem = () => {
        const { titlesOrder } = this.props;
        return titlesOrder.map((item, idx) => {
            return <ListItem
                idx={idx}
                key={idx}
                title={item.title}
                colorsOrder={item.colorsOrder}
                {...this.props}
                />
        })
    }

    render() {
        return (
            <ul className="list">
                {this.renderListItem()}
            </ul>
        )
    }
}