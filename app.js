/*!
 * Teo.JS demo app
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/28/16
 */

/* global logger */

"use strict";

const Teo = require("teo.js"),
    app = new Teo({homeDir: __dirname}, function* () {
        yield* this.start();
    });