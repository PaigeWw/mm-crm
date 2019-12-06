import React ,{useState} from 'react';
import { Card, Button, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import Form from './Form';
import TableBasic from './TableBasic'
import TdTable from './TableBasic/TdTable' 

export default () => {
  const [visible, setVisible] = useState(false);
  // const [visible, setVisible] = useState(false);
  return (
      <PageHeaderWrapper>
    <Card
        title="TD List"
        extra={
          <Button type="primary" onClick={() => setVisible(true)}>
            Add
          </Button>
        }
        style={{marginBottom: "20px"}}
      >
      <TdTable/>
    </Card>
    <Card
            title="Customer List"
            extra={
              <Button type="primary" onClick={() => setVisible(true)}>
                Add
              </Button>
            }
            style={{marginBottom: "20px"}}
    >
      <TableBasic/>
    </Card>
    <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      >
        <Form/>
      </Modal>
  </PageHeaderWrapper>
  )
}
