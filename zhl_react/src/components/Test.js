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

        const flag = 0;
        return (
            <div onClick={this.p} className="test">
             
             {
                flag===1 && <div onClick={this.c}>hahahahahahaha</div> 

             }
             {
                 
                 <h1>我出现啦！</h1>
             }
            </div>
        )
    }
}
