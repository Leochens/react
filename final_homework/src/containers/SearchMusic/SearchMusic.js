import React, { Component } from 'react';
import './SearchMusic.less';
import AudioBar from '../../components/AudioBar/AudioBar';

export default class SearchMusic extends Component {
  state = {};

  render() {
    return (
      <div>
        搜索音乐
        <AudioBar
          src={"http://cdn-xphoto2.xiaoniangao.cn/443795810?OSSAccessKeyId=LTAIajMJyFuun0yZ&Expires=1535644805&Signature=P4A%2BAASFC%2BkYhipQg5AF8Lk%2BCPQ%3D"}
          // begin={10}
          // end={88}
          autoplay={false}
          loop={true}
        />
      </div>
    );
  }
}
