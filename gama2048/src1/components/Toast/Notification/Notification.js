
import React from 'react';
import ReactDOM from 'react-dom';
import Notice from '../Notice/Notice';
import './Notification.less';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [] // 存储当前有的notices
    };
  }

  addNotice = notice => {
    // 添加notice
    // 创造一个不重复的key
    const { notices } = this.state;
    const key = notice.key ? notice.key : notice.key = getUuid();
    const flag = notices.filter(item => item.key === key).length;

    if (!flag) {
      // 不存在重复的 添加
      notices.push(notice);
      this.setState({
        notices
      });
    }
  }

  deleteNotice(key) {
    // 根据key删除对应
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key)
      };
    });
  }

  renderNotices() {
    const that = this;
    const { notices } = this.state;
    const list = [];

    notices.forEach(notice => {
      // 每个Notice onClose的时候 删除掉notices中对应key的notice
      const closeCallback = () => {
        that.deleteNotice(notice.key);
        // 如果有用户传入的onClose 执行
        if (notice.onClose) notice.onClose();
      };

      list.push(
        <Notice key={notice.key} {...notice} onClose={closeCallback} />
      );
    });

    return list;
  }

  render() {
    const noticesDOM = this.renderNotices();
    return (
      <div className="notification-box">
        {noticesDOM}
      </div>
    );
  }
}

// 统计notice总数 防止重复
let noticeNumber = 0;

// 生成唯一的id
const getUuid = () => {
  return `notification-${new Date().getTime()}-${noticeNumber++}`;
};

// Notification增加一个重写方法
// 该方法方便Notification组件动态添加到页面中和重写
Notification.config = function (properties) {
  const { ...props } = properties || {};

  let div;

  div = document.createElement('div');
  document.body.appendChild(div);

  const notification = ReactDOM.render(<Notification {...props} />, div);

  return {
    addNotice(noticeProps) {
      notification.addNotice(noticeProps);
    },
    deleteNotice(key) {
      notification.deleteNotice(key);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
    component: notification
  };
};

export default Notification;
