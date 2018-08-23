import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import './AppMain.less';

import Navigator from '../../components/Navigator/Navigator';
import Tabs from '../../components/Tabs/Tabs';
import TabItem from '../../components/TabItem/TabItem';
import Images from '../../contants/Images';
import MusicMain from '../MusicMain/MusicMain';
import Modal from '../../components/Modal/Modal';

import Slider from '../../components/Slider/Slider';

class AppMain extends Component {
  state = {};
  componentDidMount() {
    const { ServerActions } = this.props;
    ServerActions.actionUserLogin(103);
    ServerActions.actionFetchMyMusic('test81627');
    ServerActions.actionFetchRecommendMusic('test81627');
  }
  render() {
    return (
      <div className="main">
        <Navigator>{this.props.user.nick}</Navigator>
        <Tabs defaultActiveId={1}>
          <TabItem id={1} title={'我的音乐'}
            icon={{
              active: Images.musicAc,
              normal: Images.music
            }}
          >
            <MusicMain
              ui={this.props.ui}
              myMusics={this.props.myMusics}
              recommendMusics={this.props.recommendMusics}
              SelectActions={this.props.SelectActions}
              UiActions={this.props.UiActions}
              ToolActions={this.props.ToolActions}
              currentMultipleSelectedMusicIds={this.props.currentMultipleSelectedMusicIds}
              currentSingleSelectedId={this.props.currentSingleSelectedId}
              audio={this.props.audio}
            />
          </TabItem  >
          <TabItem id={2} title={'搜索音乐'}
            icon={{
              active: Images.searchAc,
              normal: Images.search
            }}
          >
          <Slider />
          </TabItem>
          <TabItem id={3} title={'上传音乐'}
            icon={{
              active: Images.uploadAc,
              normal: Images.upload
            }}
          >上传音乐</TabItem>
        </Tabs >
        <Modal
          message={'确认删除歌曲吗？'}
          isActive={this.props.ui.modalIsActive}
          onOk={()=>this.props.ToolActions.actiondeleteMusic(this.props.ui.isMultipleSelect)}
          onCancel={this.props.UiActions.actionHideModal}
        />
      </div >
    );
  }
}

const mapStateToProps = state => {
  const {
    musicManage: {
      myMusicIds,
      recommendMusicIds,
      currentMultipleSelectedMusicIds,
      currentSingleSelectedId
    },
    ui,
    login: userData,
    entities: {
      musics
    },
    audio
  } = state;

  const myMusics = myMusicIds.map(id => musics[id]);
  const recommendMusics = recommendMusicIds.map(id => musics[id]);
  return {
    user: userData,
    myMusics,
    recommendMusics,
    currentMultipleSelectedMusicIds,
    currentSingleSelectedId,
    ui,
    audio
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch),
    SelectActions: bindActionCreators(Actions.select, dispatch),
    UiActions: bindActionCreators(Actions.ui, dispatch),
    ToolActions: bindActionCreators(Actions.tools, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
