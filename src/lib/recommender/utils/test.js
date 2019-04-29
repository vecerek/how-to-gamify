
import test from 'ava';
import loadData from './';

test('loads data correctly', async t => {
  const frameworks = await loadData('frameworks');
  const frameworkIds = Object.keys(frameworks);

  t.is(frameworkIds.length, 27);
  t.is(frameworks.mora_2016.display_name, 'FRAGGLE');
});
