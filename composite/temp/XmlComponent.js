export default class XmlComponent extends Component {
    async load(filename) {
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
}