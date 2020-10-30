import Label from './Label'
import ExerciseInputs from './ExerciseInputs'

export default class Exercise extends Label {
  constructor({
    name = null,
    description = null,
    category = null,
    equipment = null,
    previousRecord = null,
    inputs = new ExerciseInputs()
  } = {}) {
    super({name, description})
    this._category = category
    this._equipment = equipment
    this._previousRecord = previousRecord
    this._inputs = inputs
  }
}
