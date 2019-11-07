import { Presenter } from './presenter.js';

export class View {
  constructor(presenter) {
    // HTML elements
    this._outputNode = document.getElementById('output');
    this._incrementButton = document.getElementById('increment');
    this._decrementButton = document.getElementById('decrement');
    this._resetButton = document.getElementById('reset');

    // Delegate events to presenter
    this._incrementButton.addEventListener('click', function() {
      presenter.incrementButtonClicked();
    });

    this._decrementButton.addEventListener('click', function() {
      presenter.decrementButtonClicked();
    });

    this._resetButton.addEventListener('click', function() {
      presenter.resetButtonClicked();
    });
  }

  displayCount(count) {
    this._outputNode.innerHTML = count;
  }
}
