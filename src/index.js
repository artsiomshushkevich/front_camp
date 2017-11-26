(() => {
    const NewsController = this.app.modules.news.controller;
    const NewsModel = this.app.modules.news.model;
    const NewsView = this.app.modules.news.view;

    let appContainer = document.querySelector('#app-container');

    let newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
    newsController.initialize();
})();