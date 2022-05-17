import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({
    text: '',
    assignee: '',
    difficulty: '2',
  });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
