import DefaultsGenerator from './classes/DefaultsGenerator.js'

// Exercise Generation
const defaults = new DefaultsGenerator()

// console.log(defaults.exercises)
// console.log(defaults.exercises.length)
// console.log(defaults.exercises[0])

console.log(defaults.workouts.items[0].exercises.items)
