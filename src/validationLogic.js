export default function validationLogic(values) {
    let errors = {}
    if (!values.voorletters) {
      errors.voorletters = 'Voorletters zijn verplicht'
    }
    if (!values.achternaam) {
      errors.achternaam = 'Achternaam is verplicht'
    }
    if (!values.postcode) {
      errors.postcode = 'Postcode is verplicht'
    } else if (
      /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(values.postcode)
    ) {
      errors.postcode = 'Ongeldige postcode'
    }
    if (!values.huisnummer) {
      errors.huisnummer = 'Huisnummer is verplicht'
    } else if (
      values.huisnummer === isNaN
    ) {
      errors.huisnummer = 'Huisnummers mogen alleen cijfers bevatten'
    }
    if (!values.email) {
      errors.email = 'Email is verplicht'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Ongeldig e-mail adres'
    }
    return errors
}