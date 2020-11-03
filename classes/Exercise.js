
import Descriptors from "./Descriptors.js";
import ExercisePlan from './ExercisePlan.js'

/**
 * 
 */
export default class Exercise extends Descriptors {
  constructor({
    name = null,
    description = null,
    category = null,
    equipment = null, // String - Equipment used (added to name)
    sets = null,
    weight = null,
    reps = null,
    duration = null,
    distance = null,
    previousRecord = null,
  } = {}) {
    super({ name, description })
    this._category = category
    this._equipment = equipment
    this._plan = new ExercisePlan({
      sets,
      weight,
      reps,
      duration,
      distance,
    })
    this._previousRecord = previousRecord
  }
}
