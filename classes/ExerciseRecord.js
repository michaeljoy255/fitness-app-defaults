import BaseRecord from './BaseRecord'
import ExerciseSetsContainer from './ExerciseSetsContainer'

export default class ExerciseRecord extends BaseRecord {
  constructor({
    duration = null,
    distance = null,
    notes = null,
    sets = new ExerciseSetsContainer(),
  } = {}) {
    super(notes)
    this._duration = duration
    this._distance = distance
    this._sets = sets
  }
}
