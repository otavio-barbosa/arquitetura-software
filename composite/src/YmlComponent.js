const fs = require('node:fs');
const Component = require('./Component');

module.exports = class YmlComponent extends Component {
    async load(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}