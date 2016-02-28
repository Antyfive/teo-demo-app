/*!
 * Index module entry point
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/28/16
 */

"use strict";

module.exports = function() {
    // "this" has app's context
    logger.log("Index module has been mounted.");
    // add some middleware, and extra logic here
    this.middleware(function* (next) {
        logger.log("Some specific index module middleware.");

        yield next;
    });
};