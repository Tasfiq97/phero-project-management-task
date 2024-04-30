import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const Sidebar = ({ items }) => {
  return (
    <div>
      <Sider
        style={{ backgroundColor: 'green' }}
        className="bg-red-500"
        width={300}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
      >
        <h1 className="md:text-3xl text-xl text-white px-5 mt-5 leading-7 font-semibold">Project </h1>
        <h1 className="md:text-3xl text-xl text-white px-5 leading-7  font-semibold">Dashboard</h1>
        <div className="demo-logo-vertical" />
        <Menu style={{ backgroundColor: 'green' }} className="bg-[#161717]" defaultSelectedKeys={['1']} items={items} />
      </Sider>
    </div>
  );
};

export default Sidebar;
