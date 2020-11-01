export default class Entity {
  constructor() {
    const randNumStr = () => Math.random().toString(36).replace(/[0.]/g, "");
    const generatedId = (randNumStr() + randNumStr())
      .padEnd(16, "x")
      .substr(0, 16);

    this._id = generatedId;
    this._createdAt = new Date();
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(date) {
    this._createdAt = date;
  }
}
