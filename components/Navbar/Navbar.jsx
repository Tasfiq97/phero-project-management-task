import { Header } from 'antd/es/layout/layout';
import React from 'react';

const Navbar = ({ colorBgContainer }) => {
  return (
    <div>
      <Header className="w-full p-4  border-red-50 font-poppins bg-[#161717] text-white">
        <h3 className="text-3xl">Dashboard</h3>
      </Header>
    </div>
  );
};

export default Navbar;
