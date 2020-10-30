import Container from './Container'

export default class Workout extends Label {
  constructor({
    name = null,
    description = null,
    exercises = new Container(),
    previousRecord = null,
  } = {}) {
    super({name, description})
    this._exercises = exercises
    this._previousRecord = previousRecord
  }
}
