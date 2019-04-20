import fs from 'fs';
import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

(async function() {
  try {
    const frameworksJson = fs.readFileSync(path.resolve(SRC_PATH, 'frameworks.json'), 'utf8');
    const frameworkSchema = JSON.parse(frameworksJson);
    const frameworks = await jsonRefParser.dereference(frameworkSchema);

    console.log(frameworks.definitions['2'].dependencies);
  } catch (e) {
    console.log(e);
  }

})();
