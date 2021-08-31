import { LoginForm, RegisterForm } from "modules";
import { Route } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route path="/login">
          <LoginForm></LoginForm>
        </Route>
        <Route path="/register">
          <RegisterForm handleSubmit={onFinish} succes={false} />
        </Route>
      </div>
    </section>
  );
};

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

export default Auth;
