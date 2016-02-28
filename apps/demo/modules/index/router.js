/*!
 * Index module router
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/28/16
 */

"use strict";

module.exports = function(router, dbAdapterInstance) {

    router.get("/", function* (req, res, next) {
        yield* this.render("index", {}, {
            partials: {
                menu: "menu",
                footer: "footer"
            },
            title: "Teo.JS Demo Application"
        });
    });

};