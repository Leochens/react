## 张鹤麟 第二周答辩

### Redux的出现原因(解决了什么样的问题)
> 主要现在单页面(spa)开发的复杂度越来越高，**数据的管理变得越来越困难**，不同的组件可能会有很高的数据耦合。
> apa的状态管理很重要。状态包括本地数据、UI控制状态、缓存和服务器端的数据等等。当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。
> Redux的出现就大大减轻了上述问题带来的影响。

### Redux的思想
> **State的变化时可预测的。**
* 因为store里数据操纵函数是纯函数

> **流水线通信**
* 首先数据都统一的存放到store里，store里会有许多Reducer去分管不同的state数据。
* 组件可以通过mapStateToProps函数来告知store它需要哪些数据，并通过connect函数与store建立连接最终把数据在渲染组件的时候注入到组件的props里。
* 当组件要修改store的数据时需要通过dispatch函数发起一个action，这个action必须有一个type属性，而且可以携带负载的参数。
* 之后dispatch函数会带着这个action去交个store里的reducers，管理该区域数据的reducer可以根据action的type类型来执行不同的操作。
* 最终store里数据进行更新并重新渲染组件。
* 如果是异步请求的话，还需要引入中间件。
![Redux][1]
### Redux的三大准则

> **单一状态源**
* Redux就像是MVC架构中的Module层，对于数据有着统一的管理。
* Redux秉持单一状态，把所有的状态(State)存到store里。

> **只读状态**
* store里的数据时只读的，外界只能去获取它的值但是却不能进行改变。如果要改变store里的数据，则必须通过发起action去调用store里的reducer
* 只有reducer才有权利去改变store里数据。
 
> **纯函数reducer去修改状态**
* React里面其实自带了一个Context的属性，也就意味着所有的组件只要得到了Context都有可能直接去操作最顶层的数据。这是极不安全的。
* 在Redux的单一数据仓库里有Reduder函数，它只有得到了相应类型的action才会去操作store里数据。
Reducer是一个函数，在Redux的思想里，Reducer是纯函数。也就是说一个输入对应一个输出，不会有中间的副作用。所谓纯函数就是说只依赖于它的参数，一个传入对应一个输出。只要参数确定，输出便确定。这也是为什么说Redux里state的变化是可预测的。



  [1]: https://upload-images.jianshu.io/upload_images/2898168-b635186b9d553c87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700
