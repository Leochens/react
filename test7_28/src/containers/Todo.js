import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import allActionCreators from '../actions';

import NavBar from '../components/NavBarContainer';
import TodoList from '../components/TodoList';
import TabBar from '../components/TabBar';

class Todo extends Component {

    render() {
        const { allActions } = this.props;
        console.log(allActions);
        return (
            <div>
                <NavBar />
                <TodoList
                    list={this.props.list}
                    toggleComplete={allActions.actionToggleComplete} />
                {/* <TabBar /> */}
            </div>
        )
    }
}

// console.log(allActionCreators);
const mapStateToProps = state => {
    return {
        list: state.TodoData.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allActions: bindActionCreators(allActionCreators.TodoAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)