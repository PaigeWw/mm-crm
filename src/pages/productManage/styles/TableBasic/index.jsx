import React from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Edit {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    id: 'M-1',
    name: 'John Brown',
    date: '2019-12-06',
  },
  {
    key: '2',
    id: 'M-2',
    name: 'John Brown',
    date: '2019-12-06',
  },
  {
    key: '3',
    id: 'M-3',
    name: 'John Brown',
    date: '2019-12-06',
  },
];
export default () => (
  <Table columns={columns} dataSource={data} />
);
