import React from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './index.less';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Accent',
    dataIndex: 'accent',
    key: 'accent',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
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
    name: 'John Brown',
    accent: 'John.Brown@mm.com',
    password: 'm123456m',
  },
  {
    key: '2',
    name: 'John Brown',
    accent: 'John.Brown@mm.com',
    password: 'm123456m',
  },
  {
    key: '3',
    name: 'John Brown',
    accent: 'John.Brown@mm.com',
    password: 'm123456m',
  },
];
export default () => (
  <Table columns={columns} dataSource={data} />
);
