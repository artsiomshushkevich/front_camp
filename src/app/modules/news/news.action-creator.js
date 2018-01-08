import config from '../../config/config';
import appDispatcher from '../../app.dispatcher';
import newsActions  from './news.actions';

class NewsActionCreator {
    getNewsBySourceId(sourceId) {
        return this._getNewsBySourceId(sourceId)
            .then((res) => {
                appDispatcher.dispatch({
                    type: newsActions.GET_NEWS_BY_SOURCE_ID,
                    news: res.articles
                });
            });
    }

    _getNewsBySourceId(sourceId) {
        const newsURL = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${config.apiKey}`;
        
        return fetch(newsURL)
            .then(res => res.json());
    }

    initialize() {
        let newsPromises = Promise.all([
            this._getAllSources(), 
            this._getNewsBySourceId('bbc-news')
        ]);

        return newsPromises
            .then((responses) => {
                appDispatcher.dispatch({
                    type: newsActions.INITIALIZE,
                    sources: responses[0].sources,
                    news: responses[1].articles
                });
            });
    }

    _getAllSources() {
        const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${config.apiKey}`;
        
        return fetch(sourcesURL)
            .then(res => res.json());
    }

    getAllSources() {
        const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${config.apiKey}`;
    
        return this._getAllSources()
            .then((res) => {
                appDispatcher.dispatch({
                    type: newsActions.GET_ALL_SOURCES,
                    sources: res.sources
                });
            });
    }
}

const newsActionCreator = new NewsActionCreator();

export default newsActionCreator;

