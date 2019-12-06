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
  },
  {
    title: 'PriceType',
    dataIndex: 'priceType',
    key: 'priceType',
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
    id: 'A',
    name: 'Prise',
    priceType: 'RMB',
  },
  {
    key: '1',
    id: 'B',
    name: 'England',
    priceType: 'RMB',
  },
  {
    key: '1',
    id: 'B',
    name: 'England',
    priceType: 'US',
  },
];
export default () => (
  <Table columns={columns} dataSource={data} />
);
