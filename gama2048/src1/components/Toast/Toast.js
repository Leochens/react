import React from 'react';
import Notification from './Notification/Notification';
import './Toast.less';

let notification;
const getNotification = () => {
  if (!notification) {
    notification = Notification.config();
  }
  return notification;
};

const notice = (content, type, duration = 3000, onClose, mask = true) => {
  const notificationInstance = getNotification();
  notificationInstance.addNotice({
    duration,
    mask,
    content: (
      <div className="toast-box">
        <div>{content}</div>
      </div>),
    onClose: () => {
      onClose && onClose();
    }
  });
};

export default {
  info(content, duration, mask, onClose) {
    return notice(content, 'info', duration, onClose, mask);
  },
  hide: () => {
    if (notification) {
      notification.destory();
      notification = null;
    }
  }
}
