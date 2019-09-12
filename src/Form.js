import React from 'react'

export default function Form(props) {
  
  return (
    <div className="form-container">
      <h1>Incentronauten Formulier</h1>
      <form>
        <input
          name="voorletters"
          placeholder="Voorletters"
          autoComplete="off"
        />
        <input
          name="tussenvoegsel"
          placeholder="Choose a safe password"
          autoComplete="off"
        />
        <input
          name="achternaam"
          placeholder="Achternaam"
          autoComplete="off"
        />
        <input
          name="postcode"
          placeholder="Postcode"
          autoComplete="off"
        />
        <input
          name="straatnaam"
          placeholder="Straatnaam"
          autoComplete="off"
        />
        <input
          name="stad"
          placeholder="Stad"
          autoComplete="off"
        />
        <input
          name="huisnummer"
          placeholder="Huisnummer"
          autoComplete="off"
        /> 
        <input
          name="email"
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
