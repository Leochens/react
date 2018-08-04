# 张鹤麟第三周答辩

路由
---

### 页面跳转
* link
* router.go()
* history.push()
### 传参及匹配规则
* 直接在路由上建立匹配规则进行传参，传递到下一个容器的`props.params`里
    ```js
    /*路由配置*/
    const route = 'about/:id' /* 匹配about/5 */
    const route = 'about(/:id)' /* 匹配about/5 , about */
    const route = 'about-:id-:name' /* 匹配about-5-Bob */ 
    ```
* 使用路径state传参
    ```js
        const path = {
            pathname: '/about',
            state: {
                id: 2,
                name: 'Bob'
            }
        }
        return <Link to={path} />
    ```

### 配置方式
* 标签嵌套
* 配置对象

中间件
---
* 作为action到reducer路上的枢纽，负责加工或者清洗筛选action。
* next的含义 
    * 本质上和dispatch类似
    * 但是next处理的action不用再从源头跑一遍中间件
* 中间件可以进行拦截，可以作为数据校验器使用。
* 特性
    * 可插拔 | 热插拔
    * 可无限延展
    * 前后可依赖

异步action
---
> Promise
* 字面意思是承诺 是一个对象
* Promise 是抽象异步处理对象以及对其进行各种操作的组件
* 在它的内部可以写一些异步执行的事务，判断事务执行成功时就返回resolve，失败时就返回reject
* 有两个回调函数，分别是then和catch 对应事务执行成功和失败时所要执行的代码逻辑
> axios
* 异步请求库
* 可携带参数请求指定url并返回结果
* 返回this对象 ， 成功时执行then方法，失败时执行catch方法
* 最好写在中间件里
> 中间件异步action
* 根据判断传进中间件的action是否包含指定字段来决定是否发起网络请求的action


数据扁平化
---
* normalizr 库
* 空间换时间
* 方便遍历操作
* 写在中间件里，在数据从服务端发来的时候就进行扁平化

Ant Design
---
* 成熟的UI组件库
* 可以拿来就用，有丰富的API接口
* 造好的轮子
