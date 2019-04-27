require('@babel/register');

const browserEnv = require('browser-env');
const identityObjProxy = require('identity-obj-proxy');

require.extensions['.css'] = module => Object.assign(module, { exports: identityObjProxy });

browserEnv();
