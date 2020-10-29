export default class ExerciseRecordsContainer {
  constructor(exerciseRecords = []) {
    this._exerciseRecords = exerciseRecords
  }

  
  get personalBest() {
    return 'Your exercise PRs!'
  }
}