import React from 'react';
import ActionSheet from './ActionSheet';

const btnStyle = {
  border: 'none',
  backgroundColor: '#eee',
  borderRadius: '6px',
  margin: 15,
  padding: 15
}
export default class TestActionSheet extends React.Component {
  state = {
    isActionSheetActive: false,
    title: '',
    menus: [],
    type: 'ios'
  };

  handleShowIosActionSheet = () => {
    this.setState({
      type: 'ios',
      isActionSheetActive: true,
      title: 'ios菜单',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      }, {
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }]
    });
  }

  handleShowAndroidActionSheet = () => {
    this.setState({
      type: 'android',
      isActionSheetActive: true,
      title: 'Android菜单',
      menus: [{
        title: '示例菜单3',
        type: 'danger',
        click: () => console.log('示例菜单3')
      }, {
        title: '示例菜单4',
        click: () => console.log('示例菜单4')
      }]
    });
  }

  handleHideActionSheet = () => {
    this.setState({
      isActionSheetActive: false
    });
  }

  render() {
    return (
      <div>
        <button 
          style={btnStyle}
        onClick={this.handleShowIosActionSheet}>ios actionsheet</button>

        <button 
          style={btnStyle}
        onClick={this.handleShowAndroidActionSheet}>android actionsheet</button>

        <ActionSheet
          type={this.state.type}
          isActive={this.state.isActionSheetActive}
          title={this.state.title}
          menus={this.state.menus}
          onCancel={this.handleHideActionSheet}
        />
      </div>
    );
}
}
