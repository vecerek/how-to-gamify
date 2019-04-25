/* eslint-disable no-use-before-define */
import test from 'ava';
import Registry from './index';

const bootstrapRegistry = (testObj) => {
  const cb = (obj, registerCb) => {
    registerCb(obj);
    return obj;
  };

  const registry = new Registry(cb);
  registry.fetchOrCreate(testObj);

  return registry;
};

test('instantiates a registry correctly', (t) => {
  const cb = () => {};
  const registry = new Registry(cb);

  t.deepEqual(registry.registry, {});
  t.is(registry.cb, cb);
});

test('#fetchOrCreate registers a new object if not in registry', (t) => {
  const testObj = { id: 'abc', value: 'def' };
  const registry = bootstrapRegistry(testObj);

  t.is(registry.registry.abc, testObj);
});

test('#fetchOrCreate returns the object registered under the same id', (t) => {
  const testObj = { id: 'abc', value: 'def' };
  const registry = bootstrapRegistry(testObj);

  t.is(registry.fetchOrCreate({ id: 'abc', value: '123' }), testObj);
});

test('#clear wipes out all the objects from the registry', (t) => {
  const registry = bootstrapRegistry({ id: 'abc', value: 'def' });
  registry.clear();

  t.deepEqual(registry.registry, {});
});
