import React, { Component } from 'react';

//这就是一个简单的Dump组件 可复用  功能简单

export default class Text extends Component{

    change=()=>{                //获取action函数
        const {change_text} = this.props
        change_text("I am Leochens")        
    }
    render(){
        const {text} = this.props       //获取store中的text
        return (
            <div>
                <h1>{text}</h1>
                <button onClick={this.change}>change</button>
            </div>
        )
    }
}