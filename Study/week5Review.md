

## redux数据流管理

* action
* dispatch
* reducer

## react生命周期

* 执行顺序及次数
    * getDefaultProps()，调用1次
    * getInitialState()，调用1次
    * componentWillMount()，调用1次
    * render()，调用>=1次
    * componentDidMount()：仅客户端，调用1次
    * componentWillReceiveProps(object nextProps)，调用>=0次
    * ShouldComponentUpdate(object nextProps, object nextState)，调用>=0次
    * componentWillUpdate(object nextProps, object nextState)，调用>=0次
    * render()，调用>=1次
    * componentDidUpdate(object prevProps, object prevState)，调用>=0次
    * componentWillUnmount()，调用1次
* 躲坑须知
    * 尽量不要在生命周期函数里调用this.setState()


## 数据扁平化

* 单一数据源
* 形似数据库
* 分治管理

## 前端UI组件库

* antd 
* semantic
* 学会查阅官方文档


## 组件化编程

* 组件的拆分
* 自治 
* 复用
* 组件传参
    * props
    * state
    * 两个子组件通信 => 状态提升

## 中间件
* 过滤、检测、加工 action
* 具体写法 sna三段式 store=>next=>action =>{}


## react路由

* 匹配规则 
* 路由传参 
* 路由跳转 history.push() router.goBack() 
* 嵌套写法和配置对象写法
* Index默认路由

## 异步action 

* axios
* promise
    * 原理
* await async
* 具体的编写位置 中间件



