import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col, Table } from 'antd';
import headList from './headList';



class StudentList extends Component {
    componentDidMount() {
        const { serverAction } = this.props;
        serverAction.actionFetchStudentList();
    }
    render() {
        const { studentList } = this.props;
        return (
            <div >
                <Row >
                    <Col span={20} offset={2}>
                        <Table
                            dataSource={studentList}
                            columns={headList}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        studentList: state.studentListReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
