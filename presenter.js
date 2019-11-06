import { model } from './model.js';

export const presenter = {
  init: function() {
    console.log(model.getCount());
  }
};
