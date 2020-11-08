import _Descriptors from './_Descriptors.js'
import ExerciseContainer from './ExerciseContainer.js'

/**
 * 
 */
export default class Workout extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    exercises = null,
  } = {}) {
    super({ id, name, description })
    this._exercises = new ExerciseContainer(exercises)
    this._previousRecord = previousRecord
  }

  get exercises() {
    return this._exercises
  }
}
