import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import './MusicMain.less';
import Slider from '../../components/Slider/Slider';
import SelectBar from '../../components/SelectBar/SelectBar';
import Navigator from '../../components/Navigator/Navigator';
import MusicList from '../../components/MusicList/MusicList';
import Tabs from '../../components/Tabs/Tabs';
import TabItem from '../../components/TabItem/TabItem';
class MusicMain extends Component {
  state = {};

  componentDidMount() {
    const { ServerActions } = this.props;
    ServerActions.actionUserLogin(103);
    ServerActions.actionFetchMyMusic('test81627');
    ServerActions.actionFetchRecommendMusic('test81627');
  }
  render() {
    console.log('组装后数据', this.props);
    const { myMusics, recommendMusics } = this.props;
    return (
      <div className="main">
        <Navigator>曲库</Navigator>
        <Tabs defaultActiveId={1}>
          <TabItem id={1} title={'我的音乐'}>
            <SelectBar />
            <MusicList
              title={"我的音乐"}
              musics={myMusics}
            />
            <MusicList
              title={"推荐音乐"}
              musics={recommendMusics}
            />
          </TabItem  >
          <TabItem id={2} title={'搜索音乐'}/>
          <TabItem id={3} title={'上传音乐'}/>
        </Tabs>

      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    musicManage: {
      myMusicIds,
      recommendMusicIds
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
    recommendMusics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicMain);
