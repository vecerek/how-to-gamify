import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const DATA_PATH = path.resolve(__dirname, '..', 'data');

const loadData = file => {
  const dataPath = path.resolve(DATA_PATH, `${file}.json`);

  return process.env.NODE_ENV === 'test'
    ? jsonRefParser.dereference(dataPath)
    : import(dataPath);
};

export default loadData;
