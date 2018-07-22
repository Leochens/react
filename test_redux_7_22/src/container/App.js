import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from '../logo.svg';
import '../App.css';
import {connect} from 'react-redux'
import {increase} from '../actions'
import Test from '../component/Test'


const mapStateToProps=(state)=>{
  return {
      value:state.counter.cnt,
      testStr:"TestStr",
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      onIncreaseClick:()=>dispatch(increase())
  }
}
// export default connect({mapStateToProps,mapDispatchToProps})(Test); 
export default connect(mapStateToProps,mapDispatchToProps)(Test);   //是2个参数 不是对象 啊啊啊啊啊啊

