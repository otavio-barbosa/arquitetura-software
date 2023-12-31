const fs = require('node:fs');
const csv = require('csv-parser');
const Component = require('./Component')

// Componente de folha a qual faz o carregamento do arquivo csv
module.exports = class CsvComponent extends Component {
    async load(filename) {
        return await new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(filename)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    resolve(results);
                });
        })
    }
}