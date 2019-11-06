export const model = {
  _count: 0,

  increment: function() {
    this._count++;
  },

  decrement: function() {
    this._count--;
  },

  reset: function() {
    this._count = 0;
  },

  getCount: function() {
    return this._count;
  }
};
