var sjcl = require("sjcl");

module.exports = {
  fuck: function() { return "!"; },
  sha256: function(x) {
    return( sjcl.codec.hex.fromBits(
              sjcl.hash.sha256.hash(x) ));
  }
};
