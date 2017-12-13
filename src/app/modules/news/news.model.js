import config from '../../config/config';


console.log('initialize  news model');

export default class NewsModel {
    getNewsBySourceId(sourceId) {
        const newsURL = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${config.apiKey}`;

        return fetch(newsURL)
            .then(res => res.json());
    }

    getAllSources() {
        const sourcesURL = `https://newsapi.org/v2/sources?apiKey=${config.apiKey}`;

        return fetch(sourcesURL)
            .then(res => res.json());
    }
}

