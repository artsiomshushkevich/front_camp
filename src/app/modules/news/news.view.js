(() => {
    class NewsView {
        constructor(container) {
            this.container = container;
        }

        _constructSourcesSelect(sources) {
            let sourcesOptions = sources.map((item) => {
                const isDefaultListItem = item.id === 'bbc-news';
                return `<option ${isDefaultListItem ? 'selected': ''} value="${item.id}">${item.name}</option>`
            });

            let selectContainer = `
                <div id="sources-select-container" class="sources-select-container">
                    <select id="sources-select">${sourcesOptions}</select>
                </div>
            `;

            return selectContainer;
        }

        _constructNewsList(news) {
            return news.map((item) => {
                return `
                    <div clas="news">  
                        <span>${item.title}</span>
                    </div>
                `;
            });

            return newsContainer;
        }

        render(viewModel) {
            const isInitialization = !!viewModel.sources;
        
            if (isInitialization) {
                let selectContainer = this._constructSourcesSelect(viewModel.sources);
                let newsList = this._constructNewsList(viewModel.news);
                let newsContainer = `
                    <div class="news-container" id="news-container">
                        ${newsList.join('')}
                    </div>
                `;

                this.container.innerHTML = selectContainer + newsContainer;

                this.container.querySelector('#sources-select').addEventListener('change', this.onSourceSelected);
            } else {
                let newsList = this._constructNewsList(viewModel.news);
                this.container.querySelector('#news-container').innerHTML = newsList.join('');
            }
        }

        get container() {
            return this._container;
        }

        set container(container){
            this._container = container;
        }

        get onSourceSelected() {
            return this._onSourceSelected || null;
        }

        set onSourceSelected(onSourceSelected) {
            this._onSourceSelected = onSourceSelected;
        }
    }

    this.app.modules.news.view = NewsView;
})();