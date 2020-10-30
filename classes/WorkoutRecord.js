import Note from './Note'

export default class WorkoutRecord extends Note {
  constructor({
    note = null,
    duration = null,
  } = {}) {
    super({note})
    this._duration = duration
  }
}
