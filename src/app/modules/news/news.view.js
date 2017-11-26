(() => {
    class NewsView {
        constructor(container) {
            this.container = container;
        }

        render(viewModel) {
            let resultView = '';
            const isInitialization = !this.container.sourceSelectContainer && viewModel.sources;

            if (isInitialization) {
                resultView 
            }

            viewModel.articles.forEach((item) => {
                resultView += `
                    <div>  
                        <span>${item.title}</span>
                    </div>
                `;
            });

            this.container.innerHTML = resultView;
        }

        get container() {
            return this._container;
        }

        set container(container){
            this._container = container;
        }
    }

    this.app.modules.news.view = NewsView;
})();