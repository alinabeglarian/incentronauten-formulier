import React from 'react'

export default function useFormValidation(initialState, validate) {
  const [ values, setValues ] = React.useState(initialState)
  const [ errors, setErrors ] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    console.log('Checking for submission')
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log('Submitting!');
        setValues(initialState)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(event) {
    console.log('I am filling in the form')
    setValues({
      ...values, 
      [event.target.name]: event.target.value
    })
  }

  function handleBlur() {
    console.log('Handling the blur')
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    console.log("Submitting?")
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
