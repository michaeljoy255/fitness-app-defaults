import { createId } from '../utils/utils'

export default class Exercise {
  constructor({
    name = null,
    description = null,
    category = null,
    equipment = null,
    lastRecordId = null,
    records = []
  } = {}) {
    this.id = createId()
    this.name = name
    this.description = description
    this.category = category
    this.equipment = equipment
    this.lastRecordId = lastRecordId
    this.records = records
  }
}
