import DefaultsGenerator from './classes/DefaultsGenerator.js'

// Exercise Generation
const defaults = new DefaultsGenerator()
console.log(defaults.exercises)
console.log(defaults.exercises.length)
console.log(defaults.exercises[0])

// // Workout Generation
// const workouts = new WorkoutContainer()

// workouts.add(new Workout({
//   name: 'Cardio Day',
//   description: 'testing',
//   exercises: [
//     new Exercise({ name: 'Test1' }),
//     new Exercise({ name: 'Test2' }),
//     new Exercise({ name: 'Test3' }),
//   ],
// }))

// console.log(workouts.items[0].exercises.items)

// console.log('---Total Exercises:', exercises.items.length)
// console.log('---Total Workouts:', workouts.items.length)
