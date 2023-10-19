const CsvComponent = require("./CsvComponent");
const Composite = require("./Composite");

const csv = new CsvComponent();

const composite = new Composite();
composite.add(csv)

composite.load('data/cidades.csv').then((result) => {
    console.log(result);
})