'use client';
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'input is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const Login = () => {
  return (
    <>
      <section className="bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-screen   lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-white mb-10">
                Log in
              </h1>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
                validateMessages={validateMessages}
              >
                <Form.Item name={['user', 'name']} label="Name">
                  <Input />
                </Form.Item>
                <Form.Item
                  name={['user', 'email']}
                  label="Email"
                  rules={[
                    {
                      type: 'email',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
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
