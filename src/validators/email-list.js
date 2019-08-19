import { required as isRequired, email as isEmail } from 'vuelidate/lib/validators'

export default function emailListValidator (value) {
  if (!value) {
    return true
  }

  let emails = value.split(',').map(email => email.trim())
  return emails.every(email => isRequired(email) && isEmail(email))
}
