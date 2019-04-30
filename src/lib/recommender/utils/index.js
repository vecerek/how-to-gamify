import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const DATA_PATH = path.resolve(__dirname, '..', 'data');

const loadData = async file => {
  const dataPath = path.resolve(DATA_PATH, `${file}.json`);

  if (process.env.NODE_ENV === 'test') {
    return await jsonRefParser.dereference(dataPath);
  }

  const data = (await import(`../data/${file}.json`)).default;
  return Object.values(data);
};

export default loadData;
