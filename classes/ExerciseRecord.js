import Note from './Note'

/**
 * 
 */
export default class ExerciseRecord extends Note {
  constructor({
    note = null,
    exerciseId = null,
    sets = [],
  } = {}) {
    super({note})
    this._exerciseId = exerciseId
    this._sets = sets
  }
}
