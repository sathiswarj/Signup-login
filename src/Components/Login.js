import React from 'react';
import { loginForm } from './ConfigureForm';
import FormComponent from './CommonForm/index';

const Login = () => {
  const handleSubmit = (data) => {
    console.log("Login Form Data:", data);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <FormComponent
        formControls={loginForm}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
