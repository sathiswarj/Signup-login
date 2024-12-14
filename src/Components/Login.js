import React from 'react';
import { loginForm } from './ConfigureForm';
import FormComponent from './CommonForm/index';
import { authStore } from '../Components/store/authStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const login = authStore((state) => state.login);
  const loggedIn = authStore((state) => state.loggedIn);
  const error = authStore((state) => state.error);

  const handleSubmit = (data) => {
    login(data);  
    console.log('Login Form Data:', data);
  
    if (!loggedIn) {
      console.log(error);
    } else {
      navigate('/home');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <FormComponent
        formControls={loginForm}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
      {error && <p className="error-message">{error}</p>}    </div>
  );
};

export default Login;
