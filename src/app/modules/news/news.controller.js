(() => {
    class NewsController {
        constructor(newsModel, newsView) {
            this.newsModel = newsModel;
            this.newsView = newsView;
        }  

        initialize() {
            this.newsView.onSourceSelected = this.onSourceSelected.bind(this);
            let newsPromises = Promise.all([
                this.newsModel.getAllSources(), 
                this.newsModel.getNewsBySourceId(this.currentSourceId)
            ]);


            newsPromises
                .then((responses) => {
                    let viewModel = {
                        articles: responses[1].articles
                    };

                    this.newsView.render(viewModel);
                });
        }
        
        onSourceSelected(event) {

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