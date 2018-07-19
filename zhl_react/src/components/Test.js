import React,{Component} from 'react'
import '../App.css'


export default class Test extends Component{
    getT=(e)=>{
        console.log(e.target.innerText)
    }
    render(){

        return (
            <div>
                <div onClick={this.getT}>nfken</div>
            </div>
        )
    }
}
