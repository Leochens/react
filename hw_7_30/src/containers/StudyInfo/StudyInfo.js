import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../../actions'
import { Row, Col, Table, Button } from 'antd';
import { BASIC_INFO } from '../../const/config';
import headList from './headList';
class StudyInfo extends Component {
    componentDidMount() {
        const { serverAction } = this.props;
        const id = '111';
        serverAction.actionFetchStudyInfo(id);
    }
    render() {
        console.log(this.props.basic_info, this.props.list);
        const { basic_info, list } = this.props;
        return (
            <div >
                <Row >
                    <Col span={20} offset={2}>
                        <Row>
                            <span> {BASIC_INFO.NAME} : {basic_info.name} </span>
                            <span> {BASIC_INFO.ID} : {basic_info.id} </span>
                            <span> {BASIC_INFO.TEACHER} : {basic_info.virtual_teacher.nick} </span>
                            <span> {BASIC_INFO.PERSON_ID} : {basic_info.virtual_teacher.id} </span>
                            <span> {BASIC_INFO.WX_CODE} : {basic_info.virtual_teacher.wx_code} </span>
                            <span> {BASIC_INFO.STAFF} : {basic_info.real_teacher.name} </span>
                            <span> {BASIC_INFO.PERSON_ID} : {basic_info.real_teacher.mid} </span>
                            <span> {BASIC_INFO.WX_CODE} : {basic_info.real_teacher.wx_code} </span>
                            <Button  onClick={this.props.router.goBack}>返回</Button>
                        </Row>
                        <Row>
                            <Table
                                dataSource={list}
                                columns={headList}
                                bordered
                            />
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        basic_info: state.studyInfoReducer.basic_info,
        list: state.studyInfoReducer.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        serverAction: bindActionCreators(allActionsCreators.serverAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyInfo);
