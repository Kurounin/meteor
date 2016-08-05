try {
  // If you really need the native `bcrypt` package, then you should
  // `meteor npm install --save bcrypt` into the node_modules directory in
  // the root of your application.
  exports.NpmModuleBcrypt = require("bcrypt");
} catch (e) {
  exports.NpmModuleBcrypt = require("bcryptjs");
}
