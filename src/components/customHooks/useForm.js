import { useState } from "react";

export function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  const handleValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return [values, handleValueChange];
}
