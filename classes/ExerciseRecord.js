import _Record from './_Record.js'
// import ExerciseSets

/**
 * 
 */
export default class ExerciseRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    sets = [],
    exerciseId = null,
  } = {}) {
    super({ id, createdAt, note })
    this._sets = sets
    this._exerciseId = exerciseId
  }
}
