import React, { Component } from 'react';
import './Toast.less';
export default class Toast extends Component {
  state = {
    show: false
  };

  componentWillReceiveProps(nextProps){
    this.setState({
      show: true
    });
    setTimeout(this.hideToast,1000);
    return nextProps;
  }
  
  hideToast = () => {
    this.setState({
      show: false
    })
  }

  getClass = () => {
    if(this.state.show){
      return 'toast show';
    }else{
      return 'toast hide';
    }
  }

  render() {
    const { msg } = this.props;

    return (
      <div className={this.getClass()}>
        <div>{msg}</div>
      </div>
    );
  }
}