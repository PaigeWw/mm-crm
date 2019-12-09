import React, { useState } from 'react';
import { Card, Typography, Divider, Input, Table } from 'antd';
const InputGroup = Input.Group;
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import TableBasic from './TableBasic';
import Form from './Form';

import { Button, Modal } from 'antd';


const CodePreview = ({ children }) => (
  <pre
    style={{
      background: '#f2f4f5',
      padding: '12px 20px',
      margin: '12px 0',
    }}
  >
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <PageHeaderWrapper>
      <Card
        title="产品基础信息"
      >
        <Divider orientation="left">产品图规格</Divider>
        <div></div>    
        <Divider orientation="left">编号规则</Divider>
        <div></div>    
        <Divider orientation="left">可选货币</Divider>
          <div>
            RMB/USD/EUR
          </div>    
          <Divider orientation="left">尺码段</Divider>
          <Card
            title="尺码段列表"
            extra={
              <Button type="primary" onClick={() => setVisible(true)}>
                添加
              </Button>
            }
            style={{marginBottom: "20px"}}
          >
           <TableBasic/>
          </Card>     
      </Card>
     
      
    </PageHeaderWrapper>
  );
};
