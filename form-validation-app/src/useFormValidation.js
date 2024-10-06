import { useState, useEffect } from 'react';

// Custom Hook for form state and validation
const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  // If no errors and form is submitted, log form data
  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      console.log('Form data:', values);
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, values]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};

export default useFormValidation;
