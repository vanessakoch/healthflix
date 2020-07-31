import { useState } from 'react';

function useForm(inicialData) {
  const [values, setValues] = useState(inicialData);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValues(inicialData);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
