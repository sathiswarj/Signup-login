import React, { useState } from 'react';
import { signupForm, loginForm } from './ConfigureForm';
import FormComponent from './CommonForm/index';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleSubmit = (data) => {
    console.log(isSignup ? "Signup Data:" : "Login Data:", data);
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <FormComponent
        formControls={isSignup ? signupForm : loginForm}
        onSubmit={handleSubmit}
        buttonText={isSignup ? "Signup" : "Login"}
        isSignup={isSignup}
        toggleAuthMode={toggleAuthMode}
      />
    </div>
  );
};

export default AuthPage;
