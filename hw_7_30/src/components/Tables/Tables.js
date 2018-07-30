import React, { Component } from 'react';
import './Tables.css';
import './Tables.less'
import { Table } from 'antd';

export default class Tables extends Component {

    render() {
      const { headList,dataList } = this.props;
    //   console.log(data);
        return (
            <div >
                <Table 
                    bordered={true}
                    dataSource={dataList} columns={headList}
                    pagination={false}
                />
            </div>
        )
    }
}
