const fs = require('fs')
const path = require('path')

module.exports = {

    log: function (logPath, res = {}, element = {}) {
        let msg = new Date().toLocaleString() + ":" + JSON.stringify(Object.assign(res, element)) + "\n"
        fs.appendFileSync(path.join(logPath, "log"), msg)
    }
}