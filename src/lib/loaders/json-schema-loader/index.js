var RefParser = require('json-schema-ref-parser');

module.exports = function(_source) {
  this.cacheable();

  var callback = this.async();
  var parser = new RefParser();
  this.cacheable && this.cacheable();

  parser.dereference(this.resourcePath)
    .then(handleResolveSuccess.bind(this))
    .catch(callback);

  function handleResolveSuccess(schema) {
    this.value = [schema];
    var json = JSON.stringify(schema, null, 2);
    parser.$refs.paths().forEach(this.addDependency);
    callback(null, json, schema);
  }
}
