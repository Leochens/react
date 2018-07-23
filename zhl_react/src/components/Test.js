import React,{Component} from 'react'
import '../App.css'


export default class Test extends Component{
    ChangeText=()=>{
        const {changeText} = this.props;
        // console.log(changeText("pppp"))

        changeText && changeText("我是redux测试");
    }
    render(){

        return (
            <div>
                <h1 onClick={this.ChangeText}>{this.props.text}</h1>
            </div>
        )
    }
}
