import React, { Component } from 'react';
import './Tables.css';
import { Table } from 'antd';
import TableList from './TableList';
export default class Tables extends Component {

    render() {
      const { dataList } = this.props;

        return (
            <div >
                <Table 
                    bordered={true}
                    dataSource={dataList}
                    columns={TableList}
                    pagination={false}
                />
            </div>
        )
    }
}

