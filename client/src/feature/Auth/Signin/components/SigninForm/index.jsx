import React from "react";
import { Form, Icon, Input, Button } from "antd";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

const SigninFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={style.signinForm}>
      <h1 className={style.authHeader}>Sign in</h1>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" }
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email"
          />
        )}
      </Form.Item>
      <Form.Item
        {...props.isError && {
          help: props.errorMessage,
          validateStatus: "error"
        }}
      >
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          loading={props.isLoading}
          style={{ width: "100%" }}
          htmlType="submit"
        >
          Sign in
        </Button>
        <div className={style.singupLinks}>
          <Link to="/signup">Create accaunt</Link> or{" "}
          <Link to="/restore-password">Forgot password</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export const SigninForm = Form.create({ name: "signinForm" })(
  SigninFormComponent
);
