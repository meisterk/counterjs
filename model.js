export class Model {
  constructor(count) {
    this.count = count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}
