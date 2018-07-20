import React,{Component} from 'react'
import '../App.css'


export default class Test extends Component{
    
    p=()=>{
        console.log("我是父亲")
    }
    c=(e)=>{
        console.log("我是孩子")
       // e.stopPropagation();
    }
    render(){
        return (
            <div onClick={this.p} className="test">
                <div onClick={this.c}>hahahahahahaha</div>
            </div>
        )
    }
}
