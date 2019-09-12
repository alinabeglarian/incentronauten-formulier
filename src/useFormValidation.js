import React from 'react'

export default function useFormValidation(initialState) {
  const [ values, setValues ] = React.useState(initialState)

  function handleChange(event) {
    console.log('I am filling in the form')
    setValues({
      ...values, 
      [event.target.name]: event.target.value
    })
  }

  return {
    values,
    handleChange,
  }
}
