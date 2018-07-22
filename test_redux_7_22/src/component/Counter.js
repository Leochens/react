import React, { Component } from 'react';

export default class Counter extends Component{

    handleClick=(e)=>{
        const {onAddClick}=this.props;
       // const node = this.refs.test;
        const thing="hello world";
        console.log(this.props.value)
        onAddClick && onAddClick(thing)
    }
    render()
    {
        return (
            <div>
                <h1>{this.props.value}</h1><button onClick={e=>this.handleClick(e)}>add</button> 
                <div ref="test"></div>
            </div>

        )
    }
}
