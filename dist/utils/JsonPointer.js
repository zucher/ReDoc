'use strict';
import * as JsonPointerLib from 'json-pointer';
var origParse = JsonPointerLib.parse;
/**
 * Wrapper for JsonPointer. Provides common operations
 */
var JsonPointer = /** @class */ (function () {
    function JsonPointer() {
    }
    /**
     * returns last JsonPointer token
     * if level > 1 returns levels last (second last/third last)
     * @example
     * // returns subpath
     * JsonPointerHelper.baseName('/path/0/subpath')
     * // returns foo
     * JsonPointerHelper.baseName('/path/foo/subpath', 2)
     */
    JsonPointer.baseName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return tokens[tokens.length - (level)];
    };
    /**
     * returns dirname of pointer
     * if level > 1 returns corresponding dirname in the hierarchy
     * @example
     * // returns /path/0
     * JsonPointerHelper.dirName('/path/0/subpath')
     * // returns /path
     * JsonPointerHelper.dirName('/path/foo/subpath', 2)
     */
    JsonPointer.dirName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return JsonPointerLib.compile(tokens.slice(0, tokens.length - level));
    };
    /**
     * returns relative path tokens
     * @example
     * // returns ['subpath']
     * JsonPointerHelper.relative('/path/0', '/path/0/subpath')
     * // returns ['foo', 'subpath']
     * JsonPointerHelper.relative('/path', '/path/foo/subpath')
     */
    JsonPointer.relative = function (from, to) {
        var fromTokens = JsonPointer.parse(from);
        var toTokens = JsonPointer.parse(to);
        return toTokens.slice(fromTokens.length);
    };
    /**
     * overridden JsonPointer original parse to take care of prefixing '#' symbol
     * that is not valid JsonPointer
     */
    JsonPointer.parse = function (pointer) {
        var ptr = pointer;
        if (ptr.charAt(0) === '#') {
            ptr = ptr.substring(1);
        }
        return origParse(ptr);
    };
    /**
    * Creates a JSON pointer path, by joining one or more tokens to a base path.
    *
    * @param {string} base - The base path
    * @param {string|string[]} tokens - The token(s) to append (e.g. ["name", "first"])
    * @returns {string}
    */
    JsonPointer.join = function (base, tokens) {
        // TODO: optimize
        var baseTokens = JsonPointer.parse(base);
        var resTokens = baseTokens.concat(tokens);
        return JsonPointerLib.compile(resTokens);
    };
    JsonPointer.get = function (object, pointer) {
        return JsonPointerLib.get(object, pointer);
    };
    JsonPointer.compile = function (tokens) {
        return JsonPointerLib.compile(tokens);
    };
    JsonPointer.escape = function (pointer) {
        return JsonPointerLib.escape(pointer);
    };
    return JsonPointer;
}());
export { JsonPointer };
JsonPointerLib.parse = JsonPointer.parse;
Object.assign(JsonPointer, JsonPointerLib);
export default JsonPointer;
//# sourceMappingURL=JsonPointer.js.map