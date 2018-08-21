import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../actions';
import './MusicMain.less';

class MusicMain extends Component {
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
      df
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    ServerActions: bindActionCreators(Actions.server, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MusicMain);
