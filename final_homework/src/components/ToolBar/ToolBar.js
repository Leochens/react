import React, { Component } from 'react';
import './ToolBar.less';
import Images from '../../contants/Images';

const ToolItem = props => {
  return (
    <div className="item">
      <div className="icon">
        <img src={props.icon} alt={props.title} />
      </div>
      <div
        style={{
          color: props.isActive ? '#333333' : null
        }}
        className="title">{props.title}</div>
    </div>
  )
}

export default class ToolBar extends Component {
  state = {};

  renderTools = () => {
    const tools = [
      {
        title: '播放',
        icon: Images.btnNewPlay,
        iconAc: Images.btnNewPlayAc,
        isActive: false,
        action: () => { }
      },
      {
        title: '重命名',
        icon: Images.btnRename,
        iconAc: Images.btnRenameAc,
        isActive: false,
        action: () => { }
      },
      {
        title: '选取片段',
        icon: Images.btnCut,
        iconAc: Images.btnCutAc,
        isActive: false,
        action: () => { }
      },
      {
        title: '送给朋友',
        icon: Images.btnShare,
        iconAc: Images.btnShareAc,
        isActive: false,
        action: () => { }
      },
      {
        title: '删除',
        icon: Images.btnDelete,
        iconAc: Images.btnDeleteAc,
        isActive: false,
        action: () => { }
      },
    ];

    return tools.map(item => (<ToolItem
      title={item.title}
      icon={item.isActive ? item.iconAc : item.icon}
      isActive={item.isActive}
      action={item.action}
    />))
  }
  render() {

    return (
      <div className="tool-bar-wrapper">
        <div className="tool-bar">
          {this.renderTools()}

        </div>
      </div>
    );
  }
}