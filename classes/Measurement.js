import Base from './Base'

export default class Measurement extends Base {
  constructor({
    bodyWeight = null,
    bodyFat = null,
  } = {}) {
    super()
    this._bodyWeight = bodyWeight
    this._bodyFat = bodyFat
  }
}