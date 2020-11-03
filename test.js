import EntityContainer from './classes/EntityContainer.js'
import Exercise from './classes/Exercise.js'
import { DEFAULT_EXERCISE } from './constants/defaults.js'

// Exercise Generation Loop Below:
const exercises = new EntityContainer()

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

console.log(exercises.get())
console.log('---Total Exercises:', exercises.get().length)
