const fs = require('node:fs');
const xml2js = require('xml2js');
const Component = require('./Component');

// Componente de folha a qual faz o carregamento do arquivo xml
module.exports = class XmlComponent extends Component {
    async load(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    xml2js.parseString(data, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            });
        });
    }
}