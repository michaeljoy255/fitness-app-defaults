import _Record from './_Record.js'

/**
 * 
 */
export default class MeasurementRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    bodyWeight = null,
    bodyFat = null,
    neck = null,
    shoulders = null,
    chest = null,
    biceps = null,
    forearms = null,
    waist = null,
    thighs = null,
    calves = null,
  } = {}) {
    super({ id, createdAt, note })
    this._bodyWeight = bodyWeight
    this._bodyFat = bodyFat
    this._neck = neck
    this._shoulders = shoulders
    this._chest = chest
    this._biceps = biceps
    this._forearms = forearms
    this._waist = waist
    this._thighs = thighs
    this._calves = calves
  }
}