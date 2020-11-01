
import Descriptors from "./Descriptors.js";
import ExerciseInputs from "./ExerciseInputs.js";

export default class Exercise extends Descriptors {
  constructor({
    name = null,
    description = null,
    category = null,
    equipment = null,
    previousRecord = null,
    allowMultipleSets = false,
    hasWeight = false,
    hasReps = false,
    hasDuration = false,
    hasDistance = false,
  } = {}) {
    super({ name, description })
    this._category = category
    this._equipment = equipment
    this._previousRecord = previousRecord
    this._inputs = new ExerciseInputs({
      allowMultipleSets,
      hasWeight,
      hasReps,
      hasDuration,
      hasDistance,
    })
  }
}
