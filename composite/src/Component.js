const fs = require('fs');

module.exports = class Component {
    citiesObject;
    cities;
    parent;

    setParent(parent) {
        this.parent = parent;
    }

    getParent() {
        return this.parent;
    }

    add(component) { }

    remove(component) { }

    isComposite() {
        return false;
    }

    async load(filename) {
        throw new Error('Não está implementado');
    }
}