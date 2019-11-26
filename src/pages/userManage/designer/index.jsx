import React from 'react';
import { Card, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      </Card>
  </PageHeaderWrapper>
);
