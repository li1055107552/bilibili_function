const path = require('path')

module.exports = {

    log: function (logPath, res = {}, element = {}) {
        const fs = require('fs')
        let msg = new Date().toLocaleString() + ":" + JSON.stringify(Object.assign(res, element)) + "\n"
        fs.appendFileSync(path.join(logPath, "log"), msg)
    }
}