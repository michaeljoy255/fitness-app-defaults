import BaseRecord from './BaseRecord'

export default class WorkoutRecord extends BaseRecord {
  constructor({
    duration = null,
    notes = null,
  } = {}) {
    super(notes)
    this._duration = duration
  }
}
