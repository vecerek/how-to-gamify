export default class Registry {
  constructor(cb) {
    this.registry = {};
    this.cb = cb;
  }

  fetchOrCreate(obj) {
    if (this.registry[obj.id]) {
      return this.registry[obj.id];
    }

    return this.cb.call(null, obj, (instance) => {
      this.registry = Object.assign({}, this.registry, { [obj.id]: instance });
    });
  }

  clear() {
    this.registry = {};
  }
}
