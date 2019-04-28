
import test from 'ava';
import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';
import schema from './data/frameworks';

const DATA_PATH = path.resolve(__dirname, 'data');

test('json-schema vol 2', async (t) => {
  console.log('schema', schema.nah_2013.features);
  const frameworksPath = path.resolve(DATA_PATH, 'frameworks.json');
  const frameworks = await jsonRefParser.dereference(frameworksPath);
  //console.log(frameworks);
});
