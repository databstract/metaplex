import { Layout } from 'antd';
import React from 'react';
import { SetupView } from './setup';

export const AboutView = () => {

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <SetupView />
    </Layout>
  );
};
