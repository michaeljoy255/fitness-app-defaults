import { createId } from '../utils/utils'

export default class WorkoutRecord {
  constructor({
    duration = null,
    distance = null,
    sets = [],
    notes = null,
  } = {}) {
    this.id = createId()
    this.createdAt = new Date()
    this.duration = duration
    this.distance = distance
    this.sets = sets
    this.notes = notes
  }
}
