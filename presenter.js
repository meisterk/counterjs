import { Model } from './model.js';
import { View } from './view.js';

export class Presenter {
  constructor() {
    this.model = new Model(5);
    this.view = new View(this);
    this._getDataAndDisplay();
  }

  _getDataAndDisplay() {
    const count = this.model.getCount();
    this.view.displayCount(count);
  }

  incrementButtonClicked() {
    this.model.increment();
    this._getDataAndDisplay();
  }

  decrementButtonClicked() {
    this.model.decrement();
    this._getDataAndDisplay();
  }

  resetButtonClicked() {
    this.model.reset();
    this._getDataAndDisplay();
  }
}
