import Entity from './Entity'

/**
 * 
 */
export default class Measurement extends Entity {
  constructor({
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
    super()
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