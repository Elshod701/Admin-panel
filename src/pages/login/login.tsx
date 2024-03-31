import React from "react";
import { useLogin } from "./service/mutation/useLogin";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { saveState } from "../../config/lib";
import "./style.scss";

export type FieldType = {
  phone_number: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const onFinish = (values: FieldType) => {
    mutate(values, {
      onSuccess: (data: any) => {
        saveState("user", data);
        navigate("/home/pointer");
      },
    });
  };

  return (
    <section className="form-bg">
      <div className=" form_container">
        <Form
          className="form"
          name="basic"
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Phone number"
            name="phone_number"
            rules={[{ required: true, message: "Please input your number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              className="form-btn"
              loading={isPending}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
