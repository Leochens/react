/**
 * 数据仓库
 */


const dyh = require('../img/dyh.png')
const icon1 = require('../img/u1.jpg')
const icon2 = require('../img/u2.jpg')
const icon3 = require('../img/u3.jpg')

const INIT_STATE = {
    icons: {
        dyh,
        icon1,
        icon2,
        icon3,
    },
    messages: [
        {
            icon: dyh,
            title: "订阅号",
            description: "this is a test",
            time: "11:15",
            isTop: false
        },
        {
            icon: icon2,
            title: "小王",
            description: "this is a test",
            time: "11:15",
            isTop: false
        },
        {
            icon: icon1,
            title: "Leochens",
            description: "this is a test",
            time: "11:15",
            isTop: false
        },
        {
            icon: icon2,
            title: "Bob",
            description: "this is a test",
            time: "11:15",
            isTop: false
        },
        {
            icon: icon3,
            title: "tee",
            description: "this is a test",
            time: "11:15",
            isTop: false
        }
    ],
    currentItem: {
        id: '',
        item: ''
    },
    deleteQueue: [],
    addPanelIsActive: false,
    itemPanelIsActive: false,
    multiDeleteIsActive: false,
    test:""
}

export default INIT_STATE;
