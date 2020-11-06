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
    return this._defaultExercises
  }

  get workouts() {
    return this._defaultWorkouts
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
    const workout1 = new Workout({
      name: 'Chest #1',
      description: '',
    })
    workout1.exercises.items = [
      new ExerciseContainer(this.getExerciseByNameAndEquipment('Warm-up', 'None')),
      new ExerciseContainer(this.getExerciseByNameAndEquipment('Warm-up', 'None')),
    ]

    return [workout1]
  }

  getExerciseByNameAndEquipment(name, equipment) {
    const exerciseContainer = new ExerciseContainer(this._defaultExercises.findByName(name))
    exerciseContainer.items = exerciseContainer.findByEquipment(equipment)
    return exerciseContainer.items[0]
  }

  createJsonFiles() {
    console.log('createJsonFiles')
  }
}