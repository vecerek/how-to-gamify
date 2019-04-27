/* eslint-disable no-console */
import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const DATA_PATH = path.resolve(__dirname, 'data');

(async function run() {
  try {
    const frameworksPath = path.resolve(DATA_PATH, 'frameworks.json');
    const frameworks = await jsonRefParser.dereference(frameworksPath);

    console.log(frameworks['1'].features);
  } catch (e) {
    console.log(e);
  }
}());
