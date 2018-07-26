import React, { Component } from 'react';
import './MultiDeleteButton.css';

export default class MultiDeleteButton extends Component {

    handleDeleteButtonClick = () => {
        const { allActions } = this.props;
        allActions.actionDeleteSelectMsg && allActions.actionDeleteSelectMsg();
        allActions.actionToggleMultiDelButton && allActions.actionToggleMultiDelButton();
    }
    render() {
        const { allActions, multiDeleteIsActive } = this.props;

        return (
            multiDeleteIsActive &&
            <div className="delete-wraper">
                <button
                    className="multi-delete-button"
                    onClick={this.handleDeleteButtonClick}>
                    删除
                </button>
                <button
                    className="cancel-button"
                    onClick={allActions.actionToggleMultiDelButton}>
                    取消
                </button>
            </div>
        )
    }
}