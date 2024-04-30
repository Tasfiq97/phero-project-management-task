import { Header } from 'antd/es/layout/layout';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Typography } from 'antd';

const Navbar = () => {
  const email = localStorage.getItem('user');
  const router = useRouter();
  const mainEmail = JSON.parse(email);
  const onClick = ({ key }) => {
    message.success(`logout successful`);
    router.push('/login');
    localStorage.clear();
  };
  const items = [
    {
      label: 'Logout',
      key: '1',
    },
  ];
  return (
    <div>
      <Header className="w-full md:flex md:justify-between md:items-center   border-red-50 font-poppins bg-[#161717] text-white h-20">
        <div>
          <h3 className="text-xl md:text-3xl">Dashboard</h3>
        </div>
        <div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {mainEmail.email}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
