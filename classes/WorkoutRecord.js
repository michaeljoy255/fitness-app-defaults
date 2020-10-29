import { createId } from '../utils/utils'

export default class WorkoutRecord {
  constructor({
    finishedAt = null,
    notes = null,
  } = {}) {
    this.id = createId()
    this.createdAt = new Date()
    this.finishedAt = finishedAt
    this.notes = notes
  }
}
