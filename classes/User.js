import _Id from './_Id.js'

/**
 * 
 */
export default class User extends _Id {
  constructor({
    id = null,
    email = null,
    birthdate = null,
    height = null,
  } = {}) {
    super(id)
    this._email = email
    this._birthdate = birthdate
    this._height = height
  }
}