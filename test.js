/*
==========Categories and Equipment Containers
- Create a Container for categories
- Create a Container for equipment
- Sort containers
- Add strings to these containers

import StringContainer from './classes/StringContainer.js'
import { DEFAULT_CATEGORY, DEFAULT_EQUIPMENT } from './constants/defaults.js'

const categories = new StringContainer()
const equipment = new StringContainer()

Object.values(DEFAULT_CATEGORY).forEach( (category) => {
  categories.add(category)
})

categories.sort()

Object.values(DEFAULT_EQUIPMENT).forEach( (equipt) => {
  equipment.add(equipt)
})

equipment.sort()

console.log(categories.getAll())
console.log(equipment.getAll())


==========Default Exercises
- Name
- Description
- Category
- Equipment
- Inputs

*/
import { DEFAULT_EXERCISE } from './constants/defaults.js'

console.log(DEFAULT_EXERCISE)
