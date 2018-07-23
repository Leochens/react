import React, { Component } from 'react';
import './style.css'


export default class TodoList extends Component{
    render()
    {

        const {list} =this.props;
        if(!list||!Array.isArray(list))
            return null;
        return (
            <div>
                {
                    list.map((item,idx)=>{
                        return <div key={idx}>{item}</div>
                    })
                }
            </div>
        )
    }
}