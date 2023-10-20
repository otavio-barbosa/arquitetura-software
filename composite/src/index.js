const CsvComponent = require("./CsvComponent");
const HtmlComponent = require("./HtmlComponent");
const XmlComponent = require("./XmlComponent");
const YmlComponent = require("./YmlComponent");
const Composite = require("./Composite");

const csv = new CsvComponent();
const html = new HtmlComponent();
const xml = new XmlComponent();
const yml = new YmlComponent();

const composite = new Composite();
composite.add(csv)

composite.load('data/cidades.csv').then((result) => {
    console.log(result);
})

const compositeHtml = new Composite();
compositeHtml.add(html);

compositeHtml.load('data/cidades.html').then((result) => {
    console.log(result);
})

const compositeXml = new Composite();
compositeXml.add(xml);

compositeXml.load('data/cidades.xml').then((result) => {
    console.log(result);
})

const compositeYml = new Composite();
compositeYml.add(yml);

compositeYml.load('data/cidades.yml').then((result) => {
    console.log(result);
})