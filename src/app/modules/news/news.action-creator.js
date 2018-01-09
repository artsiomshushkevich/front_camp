import config from '../../config/config';
import AppDispatcher from '../../app.dispatcher';
import newsActions  from './news.actions';

const appDispatcher = AppDispatcher.instance;

class NewsActionCreator {
    static getNewsBySourceId(sourceId) {
        return this._getNewsBySourceId(sourceId)
            .then((res) => {
                appDispatcher.dispatch({
                    type: newsActions.GET_NEWS_BY_SOURCE_ID,
                    news: res.articles
                });
            });
    }

    static _getNewsBySourceId(sourceId) {
        const newsURL = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${config.apiKey}`;
        
        return fetch(newsURL)
            .then(res => res.json());
    }

    static initialize() {
        let newsPromises = Promise.all([
            NewsActionCreator._getAllSources(), 
            NewsActionCreator._getNewsBySourceId('bbc-news')
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

    static _getAllSources() {
        const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${config.apiKey}`;
        
        return fetch(sourcesURL)
            .then(res => res.json());
    }

    static getAllSources() {
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

export default NewsActionCreator;

