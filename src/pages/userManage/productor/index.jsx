import React, { useState } from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import TableBasic from './TableBasic';
import Form from './Form';

import { Button, Modal } from 'antd';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <PageHeaderWrapper>
      <Card>
        <Alert
          message="Productor"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
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
