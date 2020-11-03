import Descriptors from './Descriptors.js'
import EntityContainer from './EntityContainer.js'

/**
 * 
 */
export default class Workout extends Descriptors {
  constructor({
    name = null,
    description = null,
    exercises = null,
    previousRecord = null,
  } = {}) {
    super({ name, description })
    this._exercises = new EntityContainer({ exercises })
    this._previousRecord = previousRecord
  }
}
