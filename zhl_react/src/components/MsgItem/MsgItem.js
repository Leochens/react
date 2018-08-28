import React, { Component } from 'react';
import './animate.css';
import './MsgItem.css';
export default class MsgItem extends Component {   //defualt  just only one

    constructor(props) {
        super(props);
        this.state = {
            extraClass: ''
        }

    }
    handleMoreBtnOnClick = () => {
        const {
            item,
            onToggleItemPanel,
            id,
            onSetCurrentItem } = this.props;
        const currentItem = {               //重置当前操作节点
            id,
            item
        }
        onToggleItemPanel && onToggleItemPanel();           //item控制面板
        onSetCurrentItem && onSetCurrentItem(currentItem);       //获取到是哪个item被操作
    }



    toggleCheck = () => {
        let { extraClass } = this.state;
        const { deleteQueue, allActions, id } = this.props;
        console.log(deleteQueue.includes(id), '包含 ' + id);
        if (!deleteQueue.includes(id)) {    //如果没有包含这个id 那么就把他填进去 然后变红
            extraClass = 'ischecked';
            allActions.actionAddToDeleteQueue && allActions.actionAddToDeleteQueue(id);

        } else {
            extraClass = '';
            allActions.actionDelFromDeleteQueue && allActions.actionDelFromDeleteQueue(id);
        }
        this.setState({
            extraClass
        })
    }

    renderCheckBox = () => {
        const { multiDeleteIsActive, deleteQueue, id } = this.props;
        if (multiDeleteIsActive) {      // 全局开关打开 
            if (!deleteQueue.includes(id)) {    //检测当前项是否在删除列表 不在就不渲染红点
                return (
                    <span
                        className='check-box animated headShake'
                        onClick={this.toggleCheck}
                    ></span>
                )
            } else {
                return (
                    <span
                        className={'check-box animated headShake ' + this.state.extraClass}
                        onClick={this.toggleCheck}
                    ></span>
                )
            }
        }
        return null;

    }
    render() {
        const { item } = this.props;

        const topFlag = item.isTop ? " isTop" : "";
        return (
            <li className={"list_item " + topFlag}>
                {this.renderCheckBox()}
                <span className="photo">
                    <img className="pic" src={item.icon} alt="" />
                </span>
                <ul className="info">
                    <li className="user_name">{item.title}</li>
                    <li className="content">{item.description}</li>
                </ul>
                <div className="more-wraper">
                    <span className="msg-more" onClick={this.handleMoreBtnOnClick}>more</span>
                    <span className="time">{item.time}</span>
                </div>
            </li>

        )
    }
}

