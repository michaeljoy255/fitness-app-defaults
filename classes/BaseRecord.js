import Base from './Base'

export default class BaseRecord extends Base {
  constructor(notes = null) {
    super()
    this._notes = notes
  }
}