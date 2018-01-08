export default class NewsView {
    constructor(container) {
        this.container = container;
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
                            <span>${this._getFormattedPublishedTimeLabel(item.publishedAt)}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        return newsContainer;
    }

    _getFormattedPublishedTimeLabel(time) {
        if (!time) {
            return '';
        }

        time = new Date(time);

        return `Published: ${time.getDay()}.${time.getMonth()}.${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()}`;
    }

    render(news) {
        let newsContainer = document.querySelector('#news-container');
        let newsList = this._constructNewsList(news);

        if (!newsContainer) {
            let newsContainer = `
                <div class="news-container" id="news-container">
                    ${newsList.join('')}
                </div>
            `;

            this.container.innerHTML = newsContainer;
        } else {
            newsContainer.innerHTML = newsList.join('');
        }

    }

    get container() {
        return this._container;
    }

    set container(container){
        this._container = container;
    }

}
