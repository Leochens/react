
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './style.css'
const Item = List.Item;

const itemStyle = {
    backgroundColor: '#eee',
    
}

export default class TodoList extends Component {
    renderItem = () => {
        const { list, toggleComplete } = this.props;
        return list.map((item, id) => {
            if (item.isCompleted) {
                return <div  key={id}  >
                    <Item style={itemStyle} onClick={toggleComplete.bind(this, id)} extra={'已完成'}>{item.content}</Item>
                    </div>
            }
            else {
                return <div key={id}>
                    <Item onClick={toggleComplete.bind(this, id)} extra={'待完成'}>{item.content}</Item>
                </div>
            }
        })
    }
    render() {
        return (
            <div>
                <List renderHeader={() => '所有代办事项'}>
                    {this.renderItem()}
                </List>
            </div>
        )
    }
}