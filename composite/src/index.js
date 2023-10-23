// Importação dos componentes para instanciar
const CsvComponent = require("./CsvComponent");
const HtmlComponent = require("./HtmlComponent");
const XmlComponent = require("./XmlComponent");
const YmlComponent = require("./YmlComponent");
const Composite = require("./Composite");

// instanciamento dos componentes de cada tipo de arquivo em constantes
const csv = new CsvComponent();
const html = new HtmlComponent();
const xml = new XmlComponent();
const yml = new YmlComponent();

//Instanciamento do Composite para o carregamento de arquivos csv
const compositeCsv = new Composite();
// Adicionando componente do tipo csv, onde que com ele é possível 
// fazer o carregamento do arquivo do tipo csv
compositeCsv.add(csv)

//carregamento do arquivo das cidades em formato csv atraves do composite
compositeCsv.load('data/cidades.csv').then((result) => {
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