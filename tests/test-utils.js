/**
 * Utility module.
 */
var utils = require('../lib/utils');


/**
 * Base64 test with ASCII.
 */
exports['base64ASCII'] = function (test) {
	// Checking encoded string.
	test.equal(utils.base64("some text"), "c29tZSB0ZXh0", "ASCII string is not encoded correctly!");
	// Test is done.
	test.done();
};

/**
 * Base64 test with unicode.
 */
exports['base64Unicode'] = function (test) {
	// Checking encoded string.
	test.equal(utils.base64("այսպես"), "1aHVtdW91brVpdW9", "Unicode string is not encoded correctly!");
	// Test is done.
	test.done();
};

/**
 * MD5 test with ASCII.
 */
exports['md5ASCII'] = function (test) {
	// Checking generated hash.
	test.equal(utils.base64("other text"), "b3RoZXIgdGV4dA==", "MD5 hash is not correct for ASCII string!");
	// Test is done.
	test.done();
};

/**
 * MD5 test with unicode.
 */
exports['md5Unicode'] = function (test) {
	// Checking generated hash.
	test.equal(utils.base64("այնպես"), "1aHVtdW21brVpdW9", "MD5 hash is not correct for unicode string!");
	// Test is done.
	test.done();
};