const fs = require('node:fs');
const xml2js = require('xml2js');
const Component = require('./Component');


// module.exports = class XmlComponent extends Component {
//     async load(filename) {
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err) {
//                 throw err;
//             }

//             xml2js.parseString(data, (err, result) => {
//                 if (err) {
//                     throw err;
//                 }
//                 callback(result);
//             });
//         });
//     }
// }

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