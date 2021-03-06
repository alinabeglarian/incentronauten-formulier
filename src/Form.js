import React from 'react'
import useFormValidation from './useFormValidation'
import validationLogic from './validationLogic'

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

  const { values, errors, isSubmitting, isLoading, handleChange, handleBlur, handleSubmit } = useFormValidation(initialState, validationLogic)

  return (
    <div className="form-container">
      <h1>Incentronauten</h1>
      <h1>Formulier</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="voorletters"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.voorletters}
          className={errors.voorletters && "error-input"}
          placeholder="Voorletters"
          autoComplete="off"
        />
        {errors.voorletters && <p className="error-text">{errors.voorletters}</p>}
        <input
          name="tussenvoegsel"
          onChange={handleChange}
          value={values.tussenvoegsel}
          placeholder="Tussenvoegsel"
          autoComplete="off"
        />
        <input
          name="achternaam"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.achternaam}
          className={errors.achternaam && "error-input"}
          placeholder="Achternaam"
          autoComplete="off"
        />
        {errors.achternaam && <p className="error-text">{errors.achternaam}</p>}
        <input
          name="postcode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.postcode}
          className={errors.postcode && "error-input"}
          placeholder="Postcode"
          autoComplete="off"
        />
        {errors.postcode && <p className="error-text">{errors.postcode}</p>}
        <input
          name="straatnaam"
          readOnly
          value={values.straatnaam}
          placeholder={isLoading ? "Loading..." : "Straatnaam"}
          autoComplete="off"
        />
        <input
          name="stad"
          readOnly
          value={values.stad}
          placeholder={isLoading ? "Loading..." : "Stad"}
          autoComplete="off"
        />
        <input
          name="huisnummer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.huisnummer}
          className={errors.huisnummer && "error-input"}
          placeholder="Huisnummer"
          autoComplete="off"
        /> 
        {errors.huisnummer && <p className="error-text">{errors.huisnummer}</p>}
        <input
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && "error-input"}
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <div>
          <button className="btn" disabled={isSubmitting} type="submit">Verstuur</button>
        </div>
      </form>
    </div>
  );
}
