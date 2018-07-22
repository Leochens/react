import React, { Component } from 'react';
import {connect}from 'react-redux'
import {changeText} from '../actions'
import Text from '../components/Text'
// 这里是Text的容器 也就是包装层 

class TextApp extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>In TextApp:</h2>
                <Text text={this.props.text} change_text={this.props.change_text} />
            </div>
        )
    }
}



/**
 * 以下的 数据 和 函数 被存放在了TextApp的this.props中 要在此组件中调用其他组件并传值 要显示的传值 类似于上面
 */


//in   输入数据 从store中获得数据
const mapStateToProps = (state)=>{
    return {
        text:state.textControl.text         //注意取出的时候 要看到是主reducer下的哪个reducer 如 textControl 
    }
}
//out 输出 主要是在子组件中和父组件发生了事件交流
const mapDispatchToProps=(dispatch)=>{
    return {
        change_text:(text)=>dispatch(changeText(text))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TextApp)     //把输入输出接口对齐  说明要渲染TextApp这个组件 也就是本组件

