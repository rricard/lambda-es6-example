var helloModule = require("../dist/hello.js");

var fakeLambdaContext = {
  succeed: function succeed(results) {
    console.log(results);
    process.exit(0);
  }
};

helloModule.hello({name: "bob"}, fakeLambdaContext);
