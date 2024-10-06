import React from 'react';
import useFormValidation from './useFormValidation';
import validate from './validate';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Form = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormValidation(
    INITIAL_STATE,
    validate
  );

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
