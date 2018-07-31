import React, { Component } from 'react';
import './Tables.css';
import './Tables.less'
import { Table } from 'antd';

export default class Tables extends Component {

    render() {
      const { headList,dataList } = this.props;

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


/////////////////////////////
const x = () => console.log('this is x');
const y = () => console.log('this is y');

const z = 15;
(z>12?x:y)();
