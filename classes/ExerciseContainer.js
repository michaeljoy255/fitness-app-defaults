import _DescriptorsContainer from './_DescriptorsContainer.js'

/**
 * 
 */
export default class ExerciseContainer extends _DescriptorsContainer {
  constructor(items = []) {
    super(items)
  }

  findByName(name) {
    return this._items.find((item) => item.name === name )
  }

  findByEquipment(equipment) {
    return this._items.find((item) => item.equipment === equipment )
  }
}
