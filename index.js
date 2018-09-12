
const doThing = function(resource, template) {
    const Compiler = require("@adobe/htlengine/src/compiler/Compiler");
    
    const compiler = new Compiler()
          .withOutputDirectory('.')
          .includeRuntime(true)
          .withRuntimeVar(Object.keys(resource));
    
    const filename = compiler.compile(template, './out.js');
    const service = require(filename);
    return service(resource);
}

const resource = { foo: 'bar' };
const template = '<div> <sly data-sly-test="${true}"> <p>This ${foo} is visible.</p></sly> <sly data-sly-test="${false}"> <p>This ${foo} is not visible.</p></sly></div>';

const html = doThing(resource, template);

console.log(html);