/**
 * 
 */
export default class Entity {
  constructor({
    id = null,
    createdAt = null,
  } = {}) {
    !id ? this._initId() : this._id = id
    !createdAt ? this._initCreatedAt() : this._createdAt = createdAt
  }

  get id() {
    return this._id
  }

  get createdAt() {
    return this._createdAt
  }

  set createdAt(date) {
    this._createdAt = date
  }

  _initId() {
    const randomStr = (this._getRandomString() + this._getRandomString())
    const generatedId = randomStr.padEnd(16, "x").substr(0, 16)
    this._id = generatedId
  }

  _initCreatedAt() {
    this._createdAt = new Date()
  }

  _getRandomString() {
    return Math.random().toString(36).replace(/[0.]/g, "")
  }
}
