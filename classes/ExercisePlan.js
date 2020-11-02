export default class ExercisePlan {
  constructor({
    sets = null,
    weight = null,
    reps = null,
    duration = null,
    distance = null,
  } = {}) {
    this._sets = sets
    this._weight = weight
    this._reps = reps
    this._duration = duration
    this._distance = distance
  }
}