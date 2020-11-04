
import _Descriptors from './_Descriptors.js'
import ExercisePlan from './ExercisePlan.js'
import { DEFAULT_CATEGORY, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

/**
 * 
 */
export default class Exercise extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    category = DEFAULT_CATEGORY.misc,
    equipment = DEFAULT_EQUIPMENT.none,
    sets = null,
    weight = null,
    reps = null,
    duration = null,
    distance = null,
  } = {}) {
    super({ id, name, description, previousRecord })
    this._category = category
    this._equipment = equipment
    this._plan = new ExercisePlan({
      sets,
      weight,
      reps,
      duration,
      distance,
    })
  }
}
