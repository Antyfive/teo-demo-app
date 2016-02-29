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
    db: {
        enabled: true,
        adapterConfig: {
            //adapterName: "teo.db.adapter.waterline",  // example of the local adapter config
            //adapterPath: "/absolute/path/to/adapter/directory",
            //adapterPrefix: "teo.db.adapter.",
            adapterModule: "teo-db-adapter-waterline",
            waterlineAdapters: {
                "default": require("sails-disk"),
                disk: require("sails-disk")
            },
            connections: {
                myLocalDisk: {
                    adapter: "disk"
                }
            }
        }
    },
    //appDirs: ["models", "controllers"],    // app's directories to read and collect files inside, on system start
    appFiles: ["app.js"]    // app's files to read and cache on system start
};