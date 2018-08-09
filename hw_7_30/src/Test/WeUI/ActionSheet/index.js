import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class ActionSheet extends React.Component {

  static defaultProps = {
    type: 'ios',
    isActive: false,
    title: '',
    menus: [],
    onCancel: () => { },
  };

  static propTypes = {
    type: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  getMaskClassName = () => {
    if (!this.props.isActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }

  getMenuClassName = () => {
    if (!this.props.isActive) {
      return 'menu';
    }
    return 'menu showMenu';
  }

  handleMenuItemClick = idx => {
    const { menus, onCancel } = this.props;
    menus[idx].click && menus[idx].click(idx);

    onCancel();
  }

  render() {
    const { title, menus, type } = this.props;
    return (
      <div className="actionsheetCtn">
        <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
        <div className={type + '-' + this.getMenuClassName()}>
          {
            !title.length || type !== 'ios'
              ? null
              : <div className="title divider">{title}</div>
          }

          {
            menus.map((item, idx) => (
              <div
                className="btn divider"
                key={`actionSheet_${idx}`}
                onClick={() => this.handleMenuItemClick(idx)}
              >
                {item.title}
              </div>
            ))
          }
          {
            type !== 'ios' ? null :
              <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
          }
        </div>
      </div>
    );
  }
}
