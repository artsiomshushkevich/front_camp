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
            this.currentSourceId = event.currentTarget.value;

            this.newsModel.getNewsBySourceId(this.currentSourceId)
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
            this._currentSourceId = sourceId;
        }

        get newsModel() {
            return this._newsModel || null;
        }

        set newsModel(newsModel) {
            this._newsModel = newsModel;
        }

        get newsView() {
            return this._newsView || null;
        }

        set newsView(newsView) {
            this._newsView = newsView;
        }
    }

    this.app.modules.news.controller = NewsController;
})();