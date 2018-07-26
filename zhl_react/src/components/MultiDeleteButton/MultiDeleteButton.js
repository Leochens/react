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
            <div>
                <button
                    className="multi-delete-button"
                    onClick={this.handleDeleteButtonClick}>
                    delete
                </button>
                <button
                    className="multi-delete-button"
                    onClick={allActions.actionToggleMultiDelButton}>
                    cancel
                </button>
            </div>
        )
    }
}