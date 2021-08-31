import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Block } from "components";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit }) => (
  <div>
    <div className="auth__top">
      <h2>Войти в аккаунт</h2>
      <p>Пожалуйста войдите в систему</p>
    </div>
    <Block>
      <Form
        size="large"
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item
          hasFeedback
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Войти
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/register">
          Зарегистрироваться
        </Link>
      </Form>
    </Block>
  </div>
);

export default LoginForm;
