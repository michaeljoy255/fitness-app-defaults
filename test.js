import DefaultsGenerator from './classes/DefaultsGenerator.js'

// Exercise Generation
const defaults = new DefaultsGenerator()

// console.log('---Default Exercises---')
// console.log(defaults.exercises.items.length)
// console.log(defaults.exercises.items[0])

console.log('---Default Workouts---')
console.log(defaults.workouts.items.length)
console.log(defaults.workouts.items[0])
defaults.createJsonFile()
