import _Record from './_Record.js'

/**
 * 
 */
export default class WorkoutRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    duration = null,
    workoutId = null,
  } = {}) {
    super({ id, createdAt, note })
    this._duration = duration
    this._workoutId = workoutId
  }
}
