import Entity from './Entity'

/**
 * 
 */
export default class Note extends Entity {
  constructor({
    note = null
  }={}) {
    super()
    this._note = note
  }

  get note() {
    return this._note
  }

  set note(text) {
    this._note = text
  }
}