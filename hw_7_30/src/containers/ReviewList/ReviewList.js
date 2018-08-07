import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { List } from 'antd'
import CommentList from '../../components/CommentList/CommentList';
import allActionCreators from '../../actions';
import './ReviewList.css'

class ReviewList extends Component {
    componentDidMount(){
        const { serverActions } = this.props;
        serverActions.actionFetchHomeworkList(0,0)
    }
    render() {
        return (
            <div>
                ReviewList
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverActions: bindActionCreators(allActionCreators.serverAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

