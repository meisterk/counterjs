import { presenter } from './presenter.js';

export const view = {
  init: function() {
    // HTML elements
    this._outputNode = document.getElementById('output');
    this.incrementButton = document.getElementById('increment');
    this.decrementButton = document.getElementById('decrement');
    this.resetButton = document.getElementById('reset');

    // Delegate events to presenter
    this.incrementButton.addEventListener('click', function() {
      presenter.incrementButtonClicked();
    });

    this.decrementButton.addEventListener('click', function() {
      presenter.decrementButtonClicked();
    });

    this.resetButton.addEventListener('click', function() {
      presenter.resetButtonClicked();
    });
  },

  displayCount: function(count) {
    this._outputNode.innerHTML = count;
  }
};
