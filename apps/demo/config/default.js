/*!
 * Default config
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 12/27/15
 */

module.exports = {
    host: "localhost",
    extensions: [
        {
            "name": "html-compressor",
            "module": "teo-html-compressor-extension"
        },
        {
            "name": "powered-by",
            "module": "teo-powered-by-extension"
        }
    ],
    templateSettings: {
        extension: "tpl",
        delimiters: "{{ }}",
        engine: "hogan"
    },
    appDirs: [],    // app's directories to read and collect files inside, on system start
    appFiles: ["app.js"]    // app's files to read and cache on system start
};