import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const Sidebar = ({ items }) => {
  return (
    <div>
      <Sider
        className="bg-[#161717]"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <h1 className="text-3xl text-white px-5 mt-5 leading-7 font-semibold">Project </h1>
        <h1 className="text-3xl text-white px-5 leading-7  font-semibold">Dashboard</h1>
        <div className="demo-logo-vertical" />
        <Menu className="bg-[#161717]" theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
    </div>
  );
};

export default Sidebar;
