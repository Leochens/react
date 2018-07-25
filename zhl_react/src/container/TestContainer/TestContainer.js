import React, { Component } from 'react';
import {connect} from 'react-redux'
import Test from '../components/Test'
import {changeText} from '../actions/actions'

const mapStateToProps = state=>{

    return {
        text:state.itemControl.text
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeText: (text)=>dispatch(changeText(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)





