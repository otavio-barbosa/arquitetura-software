const Component = require('./Component.js');

module.exports = class Composite extends Component {
    children = [];

    add(component) {
        this.children.push(component);
        component.setParent(this);
    }

    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    isComposite() {
        return true;
    }

    async load(filename) {
        const results = [];
        for (const child of this.children) {
            results.push(await child.load(filename));
        }

        return results;
    }
}