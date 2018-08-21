import React, { Component } from 'react';
import './style.css'
import addIcon from '../../imgs/plus.png'

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
        this.inputValue=null;
    }
    showAddText = () => {
        this.setState({ isActive: true })
    }
    handleTextChange=(e)=>{
        console.log(e.target.value)
        const str = e.target.value
        this.inputValue=str;
    }
    renderInput = () => {
        if(!this.state.isActive) 
            return null;

        return <input></input> 
    }
    handleSubmit=()=>{
        
    }
    render() {
        return (
            <div >
            <div className="add-todo">
                
                <div className="add-btn" onClick={this.showAddText}>
                    <img className="add-icon" src={addIcon}></img>
                    </div>
            </div>
        {this.state.isActive?(<div><input onChange={this.handleTextChange}></input><button onClick={this.handleSubmit}>ok</button></div>):null}
                
            </div>
        )
    }
}