import { createId } from '../utils/utils'

export default class Workout {
  constructor({
    name = null,
    exerciseIds = [],
    lastRecordId = null,
    records = null
  } = {}) {
    this.id = createId()
    this.name = name
    this.exerciseIds = exerciseIds
    this.lastRecordId = lastRecordId
    this.records = records
  }
}
