import React from 'react';
import ActionSheet from './ActionSheet';
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
      title: '标题文字',
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
      title: '标题文字2',
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
        <button onClick={this.handleShowIosActionSheet}>ios actionsheet</button>

        <button onClick={this.handleShowAndroidActionSheet}>android actionsheet</button>

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
