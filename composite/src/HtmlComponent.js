const fs = require('node:fs');
const Component = require('./Component');

// Componente de folha a qual faz o carregamento do arquivo html
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