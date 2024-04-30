'use client';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';
import { ProjectOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Content } = Layout;

const items = [ProjectOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `Projects`,
}));
const LayoutPage = ({ children }) => {
  return (
    <>
      <Layout>
        <Sidebar items={items} />
        <Layout>
          <Navbar />
          <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutPage;
