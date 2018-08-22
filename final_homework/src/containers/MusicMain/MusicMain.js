import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import './MusicMain.less';
import SelectBar from '../../components/SelectBar/SelectBar';
import Navigator from '../../components/Navigator/Navigator';
import MusicList from '../../components/MusicList/MusicList';
import Tabs from '../../components/Tabs/Tabs';
import TabItem from '../../components/TabItem/TabItem';
import ToolBar from '../../components/ToolBar/ToolBar';
import Images from '../../contants/Images';

class MusicMain extends Component {
  state = {};
  componentDidMount() {
    const { ServerActions } = this.props;
    ServerActions.actionUserLogin(103);
    ServerActions.actionFetchMyMusic('test81627');
    ServerActions.actionFetchRecommendMusic('test81627');
  }
  render() {
    // console.log('组装后数据', this.props);
    const {
      myMusics,
      recommendMusics,
      currentMultipleSelectedMusicIds,
      currentSingleSelectedId,
      isMultipleSelect,
      SelectActions,
      user,
    } = this.props;
    return (
      <div className="main">
        <Navigator>{user.nick}</Navigator>
        <Tabs defaultActiveId={1}>
          <TabItem id={1} title={'我的音乐'}
            icon={{
              active: Images.musicAc,
              normal: Images.music
            }}
          >
            <SelectBar
              SelectActions={SelectActions}
              isMultipleSelect={isMultipleSelect}
            />
            <MusicList
              title={"我的音乐"}
              musics={myMusics}
              currentMultipleSelectedMusicIds={currentMultipleSelectedMusicIds}
              currentSingleSelectedId={currentSingleSelectedId}
              SelectActions={SelectActions}
              isMultipleSelect={isMultipleSelect}
            />
            <MusicList
              title={"推荐音乐"}
              musics={recommendMusics}
              currentMultipleSelectedMusicIds={currentMultipleSelectedMusicIds}
              currentSingleSelectedId={currentSingleSelectedId}
              SelectActions={SelectActions}
              isMultipleSelect={isMultipleSelect}
            />
            <ToolBar />
          </TabItem  >
          <TabItem id={2} title={'搜索音乐'}
            icon={{
              active: Images.searchAc,
              normal: Images.search
            }}
          >搜索音乐</TabItem>
          <TabItem id={3} title={'上传音乐'}
            icon={{
              active: Images.uploadAc,
              normal: Images.upload
            }}
          >上传音乐</TabItem>
        </Tabs >
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
      currentSingleSelectedId,
      isMultipleSelect
    },
    login: userData,
    entities: {
      musics
    }
  } = state;

  const myMusics = myMusicIds.map(id => musics.myMusics[id]);
  const recommendMusics = recommendMusicIds.map(id => musics.recommendMusics[id]);
  return {
    user: userData,
    myMusics,
    recommendMusics,
    currentMultipleSelectedMusicIds,
    currentSingleSelectedId,
    isMultipleSelect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch),
    SelectActions: bindActionCreators(Actions.select, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicMain);
