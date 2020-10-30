export default class Container {
  constructor({
    entities = []
  } = {}) {
    this._entities = entities
  }

  getAll() {
    return this._entities
  }

  findById(id) {
    return null
  }

  findByIds(ids) {
    return null
  }

  findByDate(date) {
    return null
  }

  findNewest() {
    return null
  }

  findOldest() {
    return null
  }

  findBetweenDates(date1, date2) {
    return null
  }
}