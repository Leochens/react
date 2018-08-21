import { message } from 'antd';

const info = text => {
    message.info(text);
}

const error = text => {
    message.error(text);
}

const warning = text => {
    message.warning(text);
}

const success = text => {
    message.success(text)
}
const Message = {
    info,
    error,
    warning,
    success
}
export default Message;