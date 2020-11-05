import ExerciseContainer from './ExerciseContainer.js'

export default class Default {
  constructor() {
    this._defaultExercises = this._initExercises()
    this._defaultWorkouts = this._initWorkouts()
  }

  _initExercises() {
    return []
  }

  _initWorkouts() {
    return []
  }

  getExerciseByNameAndEquipment(name, equipment) {
    const exerciseContainer = new ExerciseContainer(exercises.findByName(name))
    exerciseContainer.items = exerciseContainer.findByEquipment(equipment)
    return exerciseContainer.items[0]
  }

  createJsonFiles() {
    console.log('createJsonFiles')
  }
}