/*!
 * Production config
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 12/27/15
 */

module.exports = {
    server: {
        protocol: "http",
        host: "localhost",
        port: 3000,
        // in case of HTTPS
        keyPath: "",
        certPath: ""
    },
    cluster: {
        enabled: true
    }
};