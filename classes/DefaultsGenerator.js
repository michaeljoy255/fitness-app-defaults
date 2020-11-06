import ExerciseContainer from './ExerciseContainer.js'
import Exercise from './Exercise.js'
import WorkoutContainer from './WorkoutContainer.js'
import Workout from './Workout.js'
import ExerciseInput from './ExerciseInput.js'
import { DEFAULT_EXERCISE } from '../constants/defaults.js'

export default class DefaultsGenerator {
  constructor() {
    this._defaultExercises = new ExerciseContainer()
    this._defaultWorkouts = new WorkoutContainer()
    
    this._defaultExercises.items = this._initExercises()
    this._defaultWorkouts.items = this._initWorkouts()
  }

  get exercises() {
    return this._defaultExercises.items
  }

  get workouts() {
    return this._defaultWorkouts.items
  }

  _initExercises() {
    return Object.values(DEFAULT_EXERCISE).map(({ name, description, category, equipment, inputs }) => {
      return new Exercise({
        name,
        description,
        category,
        equipment,
        inputs: [...inputs.map((input) => new ExerciseInput({
          inputType: input.inputType, hint: input.hint
        }))],
      })
    })

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