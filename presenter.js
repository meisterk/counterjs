import { Model } from './model.js';
import { view } from './view.js';

export const presenter = {
  init: function() {
    this.model = new Model(5);
    view.init();
    const count = this.model.getCount();
    view.displayCount(count);
  },

  incrementButtonClicked: function() {
    this.model.increment();
    const count = this.model.getCount();
    view.displayCount(count);
  },

  decrementButtonClicked: function() {
    this.model.decrement();
    const count = this.model.getCount();
    view.displayCount(count);
  },

  resetButtonClicked: function() {
    this.model.reset();
    const count = this.model.getCount();
    view.displayCount(count);
  }
};
