const fs = require('node:fs');
const Component = require('./Component');

module.exports = class HtmlComponent extends Component {
    async load(filename) {
        return await new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}