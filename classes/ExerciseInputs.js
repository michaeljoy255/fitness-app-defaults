export default class ExerciseInputs {
  constructor({
    allowMultipleSets = false,
    hasWeight = false,
    hasReps = false,
    hasDuration = false,
    hasDistance = false,
  }={}) {
    this._allowMultipleSets = allowMultipleSets
    this._hasWeight = hasWeight
    this._hasReps = hasReps
    this._hasDuration = hasDuration
    this._hasDistance = hasDistance
  }

  get allowMultipleSets() {
    return this._allowMultipleSets
  }

  get hasWeight() {
    return this._hasWeight
  }

  get hasReps() {
    return this._hasReps
  }

  get hasDuration() {
    return this._hasDuration
  }

  get hasDistance() {
    return this._hasDistance
  }
}