(() => {
    class NewsController {
        constructor(newsModel, newsView) {
            this.newsModel = newsModel;
            this.newsView = newsView;
        }  

        initialize() {
            this.newsView.onSourceSelected = this._onSourceSelected.bind(this);

            let newsPromises = Promise.all([
                this.newsModel.getAllSources(), 
                this.newsModel.getNewsBySourceId(this.currentSourceId)
            ]);

            newsPromises
                .then((responses) => {
                    const viewModel = {
                        sources: responses[0].sources,
                        news: responses[1].articles
                    };

                    this.newsView.render(viewModel);
                });
        }
        
        _onSourceSelected(event) {
            this.newsModel.getNewsBySourceId(event.currentTarget.value)
                .then((response) => {
                    const viewModel = {
                        news: response.articles
                    };

                    this.newsView.render(viewModel);
                });
        }

        get currentSourceId() {
            return this._currentSourceId || 'bbc-news';
        }

        set currentSourceId(sourceId) {
            this._currentSourceId = source;
        }
    }

    this.app.modules.news.controller = NewsController;
})();