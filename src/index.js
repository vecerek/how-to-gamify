import path from 'path';
import jsonRefParser from 'json-schema-ref-parser';

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

(async function() {
  try {
    const frameworksPath = path.resolve(SRC_PATH, 'frameworks.json');
    const frameworks = await jsonRefParser.dereference(frameworksPath);

    console.log(frameworks.definitions['1'].features);
  } catch (e) {
    console.log(e);
  }

})();
