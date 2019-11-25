import { useState } from "react";

export const useForm = (initialValues = {}, submitCallback) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values);
  };

  return [values, handleChanges];
};
