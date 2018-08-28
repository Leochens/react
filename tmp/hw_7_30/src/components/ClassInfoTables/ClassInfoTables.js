import React, { Component } from 'react';
import './Tables.css';
import { Table } from 'antd';
import TableList from './TableList';
import { browserHistory as history} from 'react-router'
export default class Tables extends Component {

    rowKey = (record,i) => `${record.class_info && record.class_info.id}_${i}`
    render() {
      const { dataList } = this.props;
        return (
            <div >
                <Table 
                    bordered={true}
                    dataSource={dataList}
                    columns={TableList}
                    pagination={false}
                    rowKey={this.rowKey}
                    onRow={(record)=>{
                        return {
                            onClick:()=>{
                                history.push('/studyInfo')
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

