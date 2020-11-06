import { INPUT_TYPE } from '../constants/globals.js'

/**
 * 
 */
export default class ExerciseInput {
  constructor({
    inputType = INPUT_TYPE.confirmation,
    hint = null,
  } = {}) {
    this._inputType = inputType
    this._hint = hint
  }

  getInputTypeUnit() {
    switch (this._inputType) {
      case 'Sets':
        // do correct icon and unit
        break;
    
      default:
        break;
    }
  }
}