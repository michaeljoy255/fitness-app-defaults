import Entity from './Entity'

export default class User extends Entity {
  constructor({
    email = null,
    birthdate = null,
  }={}) {
    super()
    this._email = email
    this._birthdate = birthdate
  }
}