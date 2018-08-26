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

class AppMain extends Component {
  state = {};
  componentDidMount() {
    const { ServerActions } = this.props;
    ServerActions.actionLoginAndFetchMusic(103)
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
            <MusicMain />
          </TabItem  >
          <TabItem id={2} title={'搜索音乐'}
            icon={{
              active: Images.searchAc,
              normal: Images.search
            }}
          >
            搜索音乐
          </TabItem>
          <TabItem id={3} title={'上传音乐'}
            icon={{
              active: Images.uploadAc,
              normal: Images.upload
            }}
          >
            上传音乐
          </TabItem>
        </Tabs >

      </div >
    );
  }
}
const mapStateToProps = state => {
    return {
      user: state.login
    }
};
const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
