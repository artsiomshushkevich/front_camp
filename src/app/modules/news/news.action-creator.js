import config from '../../config/config';
import appDispatcher from '../../app.dispatcher';

export default class NewsActionCreator {
    static getNewsBySourceId(sourceId) {
        const newsURL = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${config.apiKey}`;
       

        return fetch(newsURL)
            .then(res => res.json())
            .then((res) => {
                appDispatcher.dispatch({
                    type: NewsActionCreator.actions.GET_NEWS_BY_SOURCE_ID,
                    news: res.articles
                });
            });
    }

    static getAllSources() {
        const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${config.apiKey}`;

        return fetch(sourcesURL)
            .then(res => res.json());
    }

    static get actions() {
        return {
            GET_NEWS_BY_SOURCE_ID: 'getNewsBySourceId',
            GET_ALL_SOURCES: 'getAllSources',
            INITIALIZE: 'initialize' 
        };
    }
}

