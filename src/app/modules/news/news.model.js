(() => {
    const {apiKey} = this.app.config;

    class NewsModel {
        getNewsBySourceId(sourceId) {
            const newsURL = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${apiKey}`;

            return fetch(newsURL)
                .then(res => res.json());
        }

        getAllSources() {
            const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;

            return fetch(sourcesURL)
                .then(res => res.json());
        }
    }

    this.app.modules.news.model = NewsModel;
})();