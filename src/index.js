import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const ROOT_PATH = path.resolve(__dirname, '..');
const SCHEMAS_PATH = path.resolve(ROOT_PATH, 'src', 'schemas');

(async function() {
  try {
    const frameworksPath = path.resolve(SCHEMAS_PATH, 'frameworks.json');
    const frameworks = await jsonRefParser.dereference(frameworksPath);

    console.log(frameworks.definitions['1'].features);
  } catch (e) {
    console.log(e);
  }

})();
