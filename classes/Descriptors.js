import Entity from './Entity.js'

/**
 * 
 */
export default class Descriptors extends Entity {
  constructor({
    name = null,
    description = null,
  }={}) {
    super()
    this._name = name
    this._description = description
  }

  get name() {
    return this._name
  }

  get description() {
    return this._description
  }

  set name(text) {
    this._name = text
  }

  set description(text) {
    this._description = text
  }
}
