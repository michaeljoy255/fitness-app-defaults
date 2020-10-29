export default class ExercisesContainer {
  constructor(exercises = []) {
    this._exercises = exercises
  }

  get personalBest() {
    return 1
  }
}