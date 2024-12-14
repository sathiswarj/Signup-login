import React, { useState } from 'react';
import { signupForm, loginForm } from './ConfigureForm';
import FormComponent from './CommonForm/index';
import { authStore } from '../Components/store/authStore';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const signup = authStore((state) => state.signup);
   const error = authStore((state) => state.signupError);
 
  const toggleAuthMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleSubmit = (data) => {
    if (isSignup) {
      signup(data);  
    }  if(error){
      console.log(error)
    }
    
    console.log(isSignup ? 'Signup Data:' : 'Login Data:', data);
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? 'Signup' : 'Login'}</h2>
      <FormComponent
        formControls={isSignup ? signupForm : loginForm}
        onSubmit={handleSubmit}
        buttonText={isSignup ? 'Signup' : 'Login'}
        isSignup={isSignup}
        toggleAuthMode={toggleAuthMode}
      />
           {error && <p className="error-message">{error}</p>}

    </div>
  );
};

export default AuthPage;
