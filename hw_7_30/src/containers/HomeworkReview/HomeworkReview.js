import React, { Component } from 'react';
import { Link } from 'react-router';
export default class HomeworkReview extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>hello </h1>
                <Link to='unReviewList'>unReviewList</Link>
                <Link to='reviewedList'>reviewedList</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

