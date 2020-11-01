export default class StringContainer {
  constructor({ strings = [] } = {}) {
    this._strings = strings
  }

  getAll() {
    return this._strings
  }

  sort() {
    this._strings.sort()
  }

  add(string) {
    this._strings.push(string)
  }

  update(string) {
    //
  }

  remove(string) {
    //
  }
}