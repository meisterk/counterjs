import { Presenter } from './presenter.js';

export class View {
  constructor(presenter) {
    this._getHTMLelements();
    this._delegateEventsToPresenter(presenter);
  }

  _getHTMLelements() {
    this._outputNode = document.getElementById('output');
    this._incrementButton = document.getElementById('increment');
    this._decrementButton = document.getElementById('decrement');
    this._resetButton = document.getElementById('reset');
  }

  _delegateEventsToPresenter(presenter) {
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
