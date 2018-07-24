import React, { Component } from 'react';
import './ListItem.css';
import './animate.css';
import ok from './img/ok.png';

export default class ListItem extends Component {


    onSetToFront = (spotid, itemidx) => {

        const { handleSetSpotfront } = this.props;
        handleSetSpotfront && handleSetSpotfront(itemidx, spotid);
    }
    onSetTopItem = (e) => {
        const { handleSetTopItem } = this.props;
        const idx = e.target.getAttribute('itemidx');
        handleSetTopItem && handleSetTopItem(idx);

    }

    renderSpot = () => {
        const { colorsOrder } = this.props;
        const animate = "animated bounceIn "
        return colorsOrder.map((item, id) => {
            if (id === 0)

                return <span
                    key={id}
                    id={id}
                    className={animate + item}
                    itemidx={this.props.idx}
                    onClick={this.onSetToFront.bind(this, id, this.props.idx)}>
                    <img src={ok} alt="" />
                </span>

            else

                return <span
                    key={id}
                    id={id}
                    className={animate + item}
                    itemidx={this.props.idx}
                    onClick={this.onSetToFront.bind(this, id, this.props.idx)}></span>
        })
    }

    render() {
        return (
            <li className="list-item "
                onClick={this.onSetTopItem} >

                <span className="list-item-title">{this.props.title}</span>
                <ul className="list-item-colors-list">
                    <li className="color-item">
                        {this.renderSpot()}
                    </li>
                </ul>

            </li>
        )
    }
}