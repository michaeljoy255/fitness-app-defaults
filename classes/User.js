import Entity from './Entity'

/**
 * 
 */
export default class User extends Entity {
  constructor({
    email = null,
    birthdate = null,
    height = null,
  } = {}) {
    super()
    this._email = email
    this._birthdate = birthdate
    this._height = height
  }
}