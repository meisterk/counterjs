import { model } from './model.js';
import { view } from './view.js';

export const presenter = {
  init: function() {
    view.init();
    const count = model.getCount();
    view.displayCount(count);
  },

  incrementButtonClicked: function() {
    model.increment();
    const count = model.getCount();
    view.displayCount(count);
  },

  decrementButtonClicked: function() {
    model.decrement();
    const count = model.getCount();
    view.displayCount(count);
  },

  resetButtonClicked: function() {
    model.reset();
    const count = model.getCount();
    view.displayCount(count);
  }
};
