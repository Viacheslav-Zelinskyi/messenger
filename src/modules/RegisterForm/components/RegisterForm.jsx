import { Form, Input } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Button, Block } from "components";
import { Link } from "react-router-dom";

const RegisterForm = ({ handleSubmit, succes }) => (
  <div>
    <div className="auth__top">
      <h2>Регистрация</h2>
      <p>Для входа в чат, вам нужно зарегистрироваться</p>
    </div>
    <Block>
      {succes ? (
        <div className="auth__succes-block">
          <div>
            <InfoCircleTwoTone style={{ fontSize: "50px" }} />
          </div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>
            На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта
          </p>
        </div>
      ) : (
        <Form
          size="large"
          name="normal_login"
          className="login-form"
          onFinish={handleSubmit}
        >
          <Form.Item
            hasFeedback
            name="email"
            rules={[{ required: true, message: "Please input your E-Mail!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-Mail"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="username"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="rePassword"
            rules={[
              { required: true, message: "Please repeat your Password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repeat password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      )}
    </Block>
  </div>
);

export default RegisterForm;
