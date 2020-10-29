import Base from './Base'
import ExercisesContainer from './ExercisesContainer'

export default class Workout extends Base {
  constructor({
    name = null,
    exercises = new ExercisesContainer(),
    previousRecord = null,
  } = {}) {
    super()
    this._name = name
    this._exercises = exercises
    this._previousRecord = previousRecord
  }
}
