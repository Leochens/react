import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import './MusicMain.less';
import Slider from '../../components/Slider/Slider';
import SelectBar from '../../components/SelectBar/SelectBar';
import Navigator from '../../components/Navigator/Navigator';
import MusicList from '../../components/MusicList/MusicList';
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
        {/* <Slider /> */}
        {/* <SelectBar /> */}
        <div className="nav-wrapper">
          <Navigator>曲库</Navigator>
        </div>
        <SelectBar />
        <MusicList
          title={"我的音乐"}
          musics={myMusics}
        />
        <MusicList
          title={"推荐音乐"}
          musics={recommendMusics}
        />
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
