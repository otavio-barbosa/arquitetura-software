const Component = require('./Component.js');

module.exports = class Composite extends Component {
    children = [];

    // reutilizando a operação criada no component para recuperar 
    // o componente do arquivo desejado e armazena-lo no vetor de filhos (children)
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }

    // remove o componente selecionado do vetor de filhos
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    // retorna se o arquivo é composite ou não
    isComposite() {
        return true;
    }

    // carrega o arquivo selecionado
    async load(filename) {
        const results = [];
        for (const child of this.children) {
            results.push(await child.load(filename));
        }

        return results;
    }
}