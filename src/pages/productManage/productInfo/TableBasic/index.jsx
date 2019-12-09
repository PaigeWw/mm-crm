import React ,{ useState, useEffect}from 'react';
import { Table, Divider, Input } from 'antd';
const InputGroup = Input.Group;
import styles from './index.less';

const columns = [
  {
    title: 'Size',
    key: 'values',
    dataIndex: 'values',
    render: values => (
      <InputGroup>
        {values.map(value => {
          return (<>
            <Input value={value} style={{width:"40px", margin:"0 10px"}}/> 
            <span style={{float: "left", fontSize: '24px'}}>/</span>
          </>
          );
        })}
        <Input style={{width:"40px", margin:"0 10px"}}/> 
      </InputGroup>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        {/* <a>Edit {record.name}</a> */}
        {/* <Divider type="vertical" /> */}
        <a>Delete</a>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    values: ['S', 'M', 'L'],
  },
  {
    key: '2',
    values: ['A', 'B'],
  },
  {
    key: '3',
    values: ['A', 'B'],
  },
];
export default () => {
  return (
    <Table columns={columns} dataSource={data} />
  );
}
