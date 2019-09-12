import React from 'react'

export default function useFormValidation(initialState, validate) {
  const [ values, setValues ] = React.useState(initialState)
  const [ errors, setErrors ] = React.useState({})
  const [ isSubmitting, setSubmitting ] = React.useState(false)
  const [ isLoading, setLoading ] = React.useState(false)

  React.useEffect(() => {
    console.log('Checking for submission')
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log('Submitting!')
        submitData(values)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  React.useEffect(() => {
    console.log('Checking for postalcode')
    if (values.postcode && values.huisnummer) {
      console.log('there are values here')
      if (!errors.postcode && !errors.huisnummer) {
        console.log('there are no errors')
        fetchingPostalCode(values.postcode, values.huisnummer)
        setLoading(false)
      } else {
        setLoading(false)
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

  async function fetchingPostalCode(postcode, huisnummer) {
    try {
      console.log('im fetching the data')
      const response = await fetch(`http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postcode}&fq=huisnummer~${huisnummer}*`)
      const data = await response.json()
      const firstResult = await data.response.docs[0]
      setValues({
        ...values,
        stad: firstResult.woonplaatsnaam,
        straatnaam: firstResult.straatnaam
      })
    } catch(error) {
      console.log(error)
      return error
    }
  }

  async function submitData(values) {
    const settings = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(values),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
    }
    try {
      const response = await fetch("https://enpi5jvod6cob.x.pipedream.net/", settings)
      const data = await response.json()
      console.log(data)
      setValues({voorletters: "",
        tussenvoegsel: "",
        achternaam: "",
        postcode: "",
        straatnaam: "",
        stad: "",
        huisnummer: "",
        email: ""})
    } catch(error) {
      console.log(error)
      return error
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    isLoading,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}
