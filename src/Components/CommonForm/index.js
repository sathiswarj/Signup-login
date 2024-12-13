import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../CommonInput/index';
import { signupSchema, loginSchema } from '../validationSchema'; 
import { Link } from 'react-router-dom';

const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
};

function FormComponent({ formControls = [], onSubmit, buttonText, isSignup, toggleAuthMode }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isSignup ? signupSchema : loginSchema),  
    mode: 'onSubmit',
  });
   
  useEffect(() =>{
    reset()
  },[isSignup,reset])

  const renderFormElement = (formElement) => {
    const error = errors[formElement.name];
    switch (formElement?.componentType) {
      case formTypes.INPUT:
        return (
          <FormInput
            key={formElement.id}
            label={formElement.label}
            id={formElement.id}
            type={formElement.type}
            name={formElement.name}
            register={register}
            error={error}
          />
        );
       
      default:
        return null;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formControls.map((formElement, index) => (
          <div key={index} className="form-control">
            {renderFormElement(formElement)}
          </div>
        ))}
        <button type="submit">{buttonText}</button>
      </form>
      <div className="auth-toggle">
        {isSignup ? (
          <p>
            Already have an account?{" "}
            <Link to="/login" onClick={toggleAuthMode}>
              Log in
            </Link>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Link to="/signup" onClick={toggleAuthMode}>
              Sign up
            </Link>
          </p>
        )}
      </div>
    </>
  );
}

export default FormComponent;
