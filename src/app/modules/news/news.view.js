import newsStyles from '../../../styles/news.css';

import newsActions from './news.actions';
import newsActionCreator from './news.action-creator';

export default class NewsView {
    constructor(container) {
        this.container = container;
    }

    _constructSourcesSelect(sources) {
        let sourcesOptions = sources.map((item) => {
            const isDefaultListItem = item.id === 'bbc-news';
            return `<option ${isDefaultListItem ? 'selected': ''} value="${item.id}">${item.name}</option>`;
        });

        let selectContainer = `
            <div id="sources-select-container" class="sources-select-container">
                <select class="sources-select" id="sources-select">${sourcesOptions}</select>
            </div>
        `;

        return selectContainer;
    }

    _constructNewsList(news) {
        return news.map((item) => {
            return `
                <div class="news-item">
                    <img class="photo" src="${item.urlToImage}" title=${item.title}></img>
                    <div class="text-container">
                        <a class="link" href="${item.url}" target="_blank">${item.title}</a>
                        <p class="news-description">${item.description}</p>
                        <div class="publish-time" >
                            <span>${this._getFormattedPublishedTime(item.publishedAt)}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        return newsContainer;
    }

    _getFormattedPublishedTime(time) {
        if (!time) {
            return '';
        }

        time = new Date(time);

        return `Published: ${time.getDay()}.${time.getMonth()}.${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()}`;
    }

    render(state) {
        const isInitialization = !document.querySelector('#sources-select-container');
        const newsList = this._constructNewsList(state.news);

        if (isInitialization) {
            let selectContainer = this._constructSourcesSelect(state.sources);
            
            let newsContainer = `
                <div class="news-container" id="news-container">
                    ${newsList.join('')}
                </div>
            `;

            this.container.innerHTML = selectContainer + newsContainer;

            this.container.querySelector('#sources-select').addEventListener('change', this._onSourceSelected);
        } else {
            this.container.querySelector('#news-container').innerHTML = newsList.join('');
        }
    }

    _onSourceSelected(event) {
        const sourceId = event.currentTarget.value;
        newsActionCreator.getNewsBySourceId(sourceId);
    }

    get container() {
        return this._container;
    }

    set container(container){
        this._container = container;
    }
}

