export default class ExerciseSet {
  constructor({
    weight = null,
    reps = null,
  } = {}) {
    this._weight = weight
    this._reps = reps
  }

  get weight() {
    return this._weight
  }

  get reps() {
    return this._reps
  }

  set weight(w) {
    this._weight = w
  }

  set reps(r) {
    this._reps = r
  }
}
