try {
  // If you really need the native `bcrypt` package, then you should
  // `npm install bcrypt` into your application node_modules directory.
  exports.NpmModuleBcrypt = require("bcrypt");
} catch (e) {
  exports.NpmModuleBcrypt = require("bcryptjs");
}
