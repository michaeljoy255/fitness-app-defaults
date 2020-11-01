export default class EntityContainer {
  constructor({ entities = [] } = {}) {
    this._entities = entities;
  }

  getAll() {
    return this._entities;
  }

  findById(id) {
    return null;
  }

  findByIds(ids) {
    return null;
  }

  findByDate(date) {
    return null;
  }

  findNewest() {
    return null;
  }

  findOldest() {
    return null;
  }

  findBetweenDates(date1, date2) {
    return null;
  }

  add(entity) {
    this._entities.push(entity);
  }

  update(entity) {
    //
  }

  remove(entity) {
    //
  }
}
