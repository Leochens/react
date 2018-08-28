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
import SearchMusic from '../SearchMusic/SearchMusic';
import UploadMusic from '../UploadMusic/UploadMusic';
import * as TEXT from '../../contants/Text';

class AppMain extends Component {
  state = {};

  componentDidMount() {
    const { ServerActions } = this.props;
    ServerActions.actionLoginAndFetchMusic(103);
  }

  render() {
    return (
      <div className="main">
        <Navigator ui={this.props.ui}>{this.props.user.nick}</Navigator>
        <Tabs defaultActiveId={1}>
          <TabItem
            id={1}
            title={TEXT.MY_MUSIC}
            icon={{
              active: Images.musicAc,
              normal: Images.music
            }}
          >
            <MusicMain />
          </TabItem>
          <TabItem
            id={2}
            title={TEXT.SEARCH_MUSIC}
            icon={{
              active: Images.searchAc,
              normal: Images.search
            }}
          >
            <SearchMusic />
          </TabItem>
          <TabItem
            id={3}
            title={TEXT.UPLOAD_MUSIC}
            icon={{
              active: Images.uploadAc,
              normal: Images.upload
            }}
          >
            <UploadMusic />
          </TabItem>
        </Tabs>

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.get('login').toJS(),
    ui: state.get('ui').toJS()
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppMain);
