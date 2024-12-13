import React from 'react';

const FormInput = ({ label, type, name, register, id, error }) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        {...register(name)}
        className={error ? 'input-error' : ''}
      />
    </div>
  );
};

export default FormInput;
