import React, { Component } from 'react';
import Test from '../component/Test'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { increase } from '../actions';
class TestContainer extends Component{
    
   
    render ()
    {
        console.log(this.props.value)
        return (
            <Test value={this.props.value}  
            clickH={this.props.clickH}/>
        )
    }
}

export default connect({mapStateToProps,mapDispatchToProps})(Test)