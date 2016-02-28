/*!
 * Main app. Use it for your custom logic
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/28/16
 */

"use strict";

module.exports = function() {
    // app specific logic here, like middleware, etc.
    this.middleware(function* (next) {
        let time = new Date();
        logger.log("middleware 1");

        yield* next;

        logger.log("<--- request time ms:", new Date() - time);
    });
    this.middleware(function* (next) {
        logger.log("second middleware");
        yield* next;
    });
};