import sys from 'node:sys';

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';
import LoadMultiplesFiles from './src/LoadMultiplesFiles.js'

const [cmd, script, param1] = process.argv,
  filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

let loadData = new LoadMultiplesFiles();
loadData.loadHTML(formaterStrategies.html);

let reporter = new CitiesReporter({
  formaterStrategy: formaterStrategies[param1]
}),
  output = reporter.report(filename);

console.log(output);