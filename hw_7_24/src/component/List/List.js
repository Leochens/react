import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'

import './List.css'

export default class List extends Component {

    renderListItem = () => {

        const { titlesOrder } = this.props;
        return titlesOrder.map((item, idx) => {
            return <ListItem
                idx={idx}
                key={idx}
                title={item.title}
                colorsOrder={item.colorsOrder}
                onSetTopItem={this.onSetTopItem}
                onChangeItemColorOrder={this.onChangeItemColorOrder}
                onSetSpotfront={this.onSetSpotfront} />
        })
    }
    onSetSpotfront = (itemid, spotid) => {
        const { handleSetSpotfront } = this.props;
        handleSetSpotfront && handleSetSpotfront(itemid, spotid);

    }
    onSetTopItem = (id) => {
        const { handleSetTopItem } = this.props;
        handleSetTopItem && handleSetTopItem(id)
    }

    render() {
        return (
            <ul className="list">
                {this.renderListItem()}
            </ul>
        )
    }
}