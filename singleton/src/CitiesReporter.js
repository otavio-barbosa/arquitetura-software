import fs from 'node:fs';
// let instance;

export default class CitiesReporter {
  // constructor() {
  //   if(instance) {
  //     throw new Error("Nova instância não pode ser criada!");
  //   }

  //   instance = this;
  // }


  // constructor ({ formaterStrategy }) {
  //   this._formaterStrategy = formaterStrategy;
  // }

  static getInstance() {
    if (!CitiesReporter.instance) {
      CitiesReporter.instance = new CitiesReporter();
    }

    return CitiesReporter.instance;
  }

  _read(filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._cities;
  }
}





