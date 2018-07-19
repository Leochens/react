import React, { Component } from 'react'
import '../App.css'
import '../css/animate.css'

const del = '删除'
const add = '添加'
const selectAll = '全选'
const update = '修改'


export default class Dialog extends Component {
    componentWillMount()
    {
        console.log("Dialog componentWillMount");
    }
    componentDidMount(){
        console.log("Dialog componentDidMount");

    }
    componentDidUpdate(){
        console.log("Dialog componentDidUpdate");
    }
    componentWillReceiveProps()
    {
        console.log("Dialog componentWillReceiveProps");
    }
    componentWillUpdate()
    {
        console.log("Dialog componentWillUpdate");

    }
    shouldComponentUpdate(){
        console.log("Dialog shouldComponentUpdate");
        return true;            //Note
    }
    d_onClick = (msg) => {
        console.log(msg)
    }
    render() {
        console.log("render")
        return (
                <div className="panel-item animated slideInUp">
                    <button className="btn" onClick={this.d_onClick.bind(this, del)}>{del}</button>
                    <button className="btn" onClick={this.d_onClick.bind(this, add)}>{add}</button>
                    <button className="btn" onClick={this.d_onClick.bind(this, selectAll)}>{selectAll}</button>
                    <button className="btn" onClick={this.d_onClick.bind(this, update)}>{update}</button>
                </div>
        )
    }
}
