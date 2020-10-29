import Base from './Base'

export default class User extends Base {
  constructor({
    email = null,
    birthdate = null,
  }) {
    super()
    this._email = email
    this._birthdate = birthdate
  }
}