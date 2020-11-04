import ExerciseContainer from './classes/ExerciseContainer.js'
import Exercise from './classes/Exercise.js'
import WorkoutContainer from './classes/WorkoutContainer.js'
import Workout from './classes/Workout.js'
import { DEFAULT_EXERCISE } from './constants/defaults.js'

// Exercise Generation
const exercises = new ExerciseContainer()

Object.values(DEFAULT_EXERCISE).forEach(({ name, description, category, equipment, plan }) => {
  exercises.add(new Exercise({
    name,
    description,
    category,
    equipment,
    sets: plan.sets,
    weight: plan.weight,
    reps: plan.reps,
    duration: plan.duration,
    distance: plan.distance,
  }))
})

console.log(exercises.items)

// Workout Generation
const workouts = new WorkoutContainer()

workouts.add(new Workout({
  name: 'Cardio Day',
  description: 'testing',
  exercises: [
    new Exercise({ name: 'Test1' }),
    new Exercise({ name: 'Test2' }),
    new Exercise({ name: 'Test3' }),
  ],
}))

console.log(workouts.items[0].exercises.items)

console.log('---Total Exercises:', exercises.items.length)
console.log('---Total Workouts:', workouts.items.length)
