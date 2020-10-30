import Note from './Note'

export default class ExerciseRecord extends Note {
  constructor({
    note = null,
    sets = [],
  } = {}) {
    super({note})
    this._sets = sets
  }
}
