require('@babel/register');

const browserEnv = require('browser-env');
const identityObjProxy = require('identity-obj-proxy');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require.extensions['.css'] = module => Object.assign(module, { exports: identityObjProxy });
require.extensions['.svg'] = module => Object.assign(module, { exports: '#' });

browserEnv();

Enzyme.configure({ adapter: new Adapter() });
