const fs = require('fs');
const xml2js = require('xml2js');
const csv = require('csv-parser');
const yaml = require('js-yaml');
const cheerio = require('cheerio');

class LoadMultiplesFiles {
    loadXML(filePath, callback) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            xml2js.parseString(data, (err, result) => {
                if (err) {
                    throw err;
                }
                callback(result);
            });
        });
    }

    loadCSV(filePath, callback) {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                callback(results);
            });
    }

    loadYAML(filePath, callback) {
        const data = fs.readFileSync(filePath, 'utf8');
        const parsedData = yaml.safeLoad(data);
        callback(parsedData);
    }

    loadHTML(filePath, callback) {
        const data = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(data);
        callback($);
    }
}

// Exemplo de uso:

const LoadMultiplesFiles = new LoadMultiplesFiles();

const xmlFilePath = 'exemplo.xml';
const csvFilePath = 'exemplo.csv';
const yamlFilePath = 'exemplo.yaml';
const htmlFilePath = 'exemplo.html';

LoadMultiplesFiles.loadXML(xmlFilePath, (xmlData) => {
    console.log('Dados em formato XML:');
    console.log(xmlData);
});

LoadMultiplesFiles.loadCSV(csvFilePath, (csvData) => {
    console.log('Dados em formato CSV:');
    console.log(csvData);
});

LoadMultiplesFiles.loadYAML(yamlFilePath, (yamlData) => {
    console.log('Dados em formato YAML:');
    console.log(yamlData);
});

LoadMultiplesFiles.loadHTML(htmlFilePath, ($) => {
    console.log('Dados em formato HTML:');
    console.log($.html());
});

const formaterStrategies = {
    'html': new FormaterHTML(),
    'txt': new FormaterTXT()
};
