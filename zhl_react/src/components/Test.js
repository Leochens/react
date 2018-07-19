import React,{Component} from 'react'
import '../App.css'


export default class Test extends Component{
    getT=(e)=>{
        console.log(e.target.innerText)
    }

    Child=()=>{
        const testStr = "我是子组件的值";
        const {Parent}=this.props;
        if(Parent)
        {
            Parent(testStr)
        }
    }

    render(){

        return (
            <div>
                <div onClick={this.Child}>TTTTTT</div>
            </div>
        )
    }
}
