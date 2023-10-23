import fs from "node:fs";
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

  // Método estático para chamada do construtuor, responsável pela garantia que a classe tenha apenas uma instância.
  // Este método faz a verificação se a instância de CitiesReporter já existe, caso não exista ela é criada, e no caso de já existir a mesma é retornada:
  static getInstance() {
    //A privatização de atributos não existe no JS, para isso utilizamos uma estrutura condicional para ter a acesso a criação da instância
    if (!CitiesReporter.instance) {
      // Caso não exista
      CitiesReporter.instance = new CitiesReporter();
    }

    // Retorno da instância
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
