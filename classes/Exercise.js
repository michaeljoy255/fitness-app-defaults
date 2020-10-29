import Base from './Base'

export default class Exercise extends Base {
  constructor({
    name = null,
    description = null,
    category = null,
    equipment = null,
    previousRecord = null,
    hasSets = false,
    hasWeight = false,
    hasReps = false,
    hasDuration = false,
    hasDistance = false,
  } = {}) {
    super()
    this._name = name
    this._description = description
    this._category = category
    this._equipment = equipment
    this._previousRecord = previousRecord
    this._hasSets = hasSets
    this._hasWeight = hasWeight
    this._hasReps = hasReps
    this._hasDuration = hasDuration
    this._hasDistance = hasDistance
  }

  get name() {
    if (this._equipment) {
      return `${this._name}, ${this._equipment}`
    } else {
      return this._name
    }
  }

  get description() {
    return this._description
  }

  get category() {
    return this._category
  }
}
