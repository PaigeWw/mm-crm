import React from 'react';
import { Card, Input, Alert, Icon } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
export default () => (
  <PageHeaderWrapper>
    <Card>
      <Input.Search
        placeholder="input email"
        enterButton="Commit"
        size="large"
        onSearch={value => console.log(value)}
     />
    </Card>
  </PageHeaderWrapper>
);
