import React from 'react'
import useFormValidation from './useFormValidation'

const initialState = {
  voorletters: "",
  tussenvoegsel: "",
  achternaam: "",
  postcode: "",
  straatnaam: "",
  stad: "",
  huisnummer: "",
  email: ""
}

export default function Form(props) {

  const { values, handleChange } = useFormValidation(initialState)

  return (
    <div className="form-container">
      <h1>Incentronauten Formulier</h1>
      <form>
        <input
          name="voorletters"
          onChange={handleChange}
          value={values.voorletters}
          placeholder="Voorletters"
          autoComplete="off"
        />
        <input
          name="tussenvoegsel"
          onChange={handleChange}
          value={values.tussenvoegsel}
          placeholder="Choose a safe password"
          autoComplete="off"
        />
        <input
          name="achternaam"
          onChange={handleChange}
          value={values.achternaam}
          placeholder="Achternaam"
          autoComplete="off"
        />
        <input
          name="postcode"
          onChange={handleChange}
          value={values.postcode}
          placeholder="Postcode"
          autoComplete="off"
        />
        <input
          name="straatnaam"
          onChange={handleChange}
          value={values.straatnaam}
          placeholder="Straatnaam"
          autoComplete="off"
        />
        <input
          name="stad"
          onChange={handleChange}
          value={values.stad}
          placeholder="Stad"
          autoComplete="off"
        />
        <input
          name="huisnummer"
          onChange={handleChange}
          value={values.huisnummer}
          placeholder="Huisnummer"
          autoComplete="off"
        /> 
        <input
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
          autoComplete="off"
        /> 
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
