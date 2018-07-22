import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Test extends Component{

    static propTypes={
        value:PropTypes.number.isRequired,
        onIncreaseClick:PropTypes.func.isRequired,
        testStr:PropTypes.string.isRequired
    }

    render(){
        const {value,onIncreaseClick,testStr,s}=this.props
        console.log(this.props)
        // console.log(s)
        return (
            <div>
            <span>{value}</span>
            <button onClick={onIncreaseClick}>Increase</button><span>{testStr}</span>
          </div>
        )
    }
}