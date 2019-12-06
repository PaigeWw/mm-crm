import React, { useState } from 'react';
import { Card, Typography, Alert } from 'antd';
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
        title="Productor List"
        extra={
          <Button type="primary" onClick={() => setVisible(true)}>
            Add
          </Button>
        }
      >
        <TableBasic />
      </Card>
     
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      >
         <Form />
      </Modal>
    </PageHeaderWrapper>
  );
};
