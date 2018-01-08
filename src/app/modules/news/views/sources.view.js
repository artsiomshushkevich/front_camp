export default class SourcesView {
    contructor(container) {
        this.container = container;
    }

    render(sources) {
        let sourcesOptions = sources.map((item) => {
            const isDefaultListItem = item.id === 'bbc-news';
            return `<option ${isDefaultListItem ? 'selected': ''} value="${item.id}">${item.name}</option>`
        });

        let selectContainer = `
            <div id="sources-select-container" class="sources-select-container">
                <select class="sources-select" id="sources-select">${sourcesOptions}</select>
            </div>
        `;

        //create temporary node for transpiling selectContainer from string to node
        let temporaryContainer = document.createElement('div');
        temporaryContainer.innerHTML = selectContainer;

        let selectContainerNode = temporaryContainer.firstChild;
        this.container.appendChild(selectContainerNode);
    }

    get container() {
        return this._container;
    }

    set container(container) {
        this._container = container;
    }
}