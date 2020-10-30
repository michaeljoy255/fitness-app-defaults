export default class Entity {
  constructor() {
    const strFromDateAndNumber = performance.now().toString(36) + Math.random().toString(36)
    const generatedId = strFromDateAndNumber.replace(/\./g, '').padEnd(17, 'x').substr(1, 15)

    this._id = generatedId
    this._createdAt = new Date()
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
}