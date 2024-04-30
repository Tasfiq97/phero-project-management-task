'use client';
import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [error, setError] = useState(false);

  const router = useRouter();
  const onFinish = (values) => {
    setError(false);
    localStorage.setItem('user', JSON.stringify(values));
    message.success(`login successful`);
    router.push('/dashboard');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('🚀 ~ onFinishFailed ~ errorInfo:', errorInfo);
    setError(true);
    message.error(errorInfo.errorFields[0].errors[0]);
  };
  return (
    <>
      <section className="bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-white mb-10">
                Log in
              </h1>
              <Form
                className="w-[240px] md:w-full text-white  "
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  autoComplete="off"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                {error ? error : ' '}
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
