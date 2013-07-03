(function(module) {
    var gif = new Buffer(43);

    gif.write("R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 0, 43, "base64");

    module.exports = gif;
})(module);
