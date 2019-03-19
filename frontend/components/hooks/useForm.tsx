import { useState, useEffect } from 'react';

const useForm = validate => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [query, setQuery] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const errorsCount = Object.keys(errors).length;
    if (errorsCount === 0 && isSubmitting) {
      query.query();
    }
  }, [errors]);

  const handleSubmit = (event, query) => {
    if (event) event.preventDefault();

    const { name } = event.target.elements;
    console.log(event.target.elements);

    if (validate) {
      setErrors(validate(values));
    } else {
      setErrors({});
    }
    setIsSubmitting(true);

    setQuery({ query: query });
  };

  const handleChange = event => {
    event.persist();

    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;

    setValues(values => ({
      ...values,
      //[event.target.name]: event.target.value,
      [name]: val,
    }));
  };

  const resetValues = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    resetValues,
    values,
    errors,
  };
};

export default useForm;
