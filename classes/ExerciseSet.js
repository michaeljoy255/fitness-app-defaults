/**
 * 
 */
export default class ExerciseSet {
  constructor({
    weight = null,
    reps = null,
    duration = null,
    distance = null,
  } = {}) {
    this._weight = weight
    this._reps = reps
    this._duration = duration
    this._distance = distance
  }

  get weight() {
    return this._weight
  }

  get reps() {
    return this._reps
  }

  get duration() {
    return this._duration
  }

  get distance() {
    return this._distance
  }

  set weight(w) {
    this._weight = w
  }

  set reps(r) {
    this._reps = r
  }

  set duration(time) {
    this._duration = time
  }

  set distance(d) {
    this._distance = d
  }
}
