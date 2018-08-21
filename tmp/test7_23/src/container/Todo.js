import React, { Component } from 'react';
import AddTodo from '../component/todo/AddTodo'
import TodoList from '../component/todo/TodoList'
import Filter from '../component/todo/Filter'
import './style.css'
import checkIcon from '../imgs/check.png' 


export default class Todo extends Component{
    constructor()
    {
        super();
        this.state={
            list:['dewf','edfiwef','wefewf']
        }
    }

    handleAddTodo=(item)=>{
        
    }

    render()
    {
        return (

            <div className="todo-main">
                <AddTodo/>
                <TodoList list={this.state.list}/>
                <Filter/>
            </div>
        )
    }
}