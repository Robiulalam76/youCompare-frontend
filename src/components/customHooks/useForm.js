import { useState } from 'react'

export function useForm(initValues) {
  const [values, setValues] = useState(initValues)

  const handleValueChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return [values, handleValueChange]
}