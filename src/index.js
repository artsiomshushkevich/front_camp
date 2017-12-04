((window) => {
    const { 
        controller: NewsController,
        model: NewsModel,
        view: NewsView
    } = window.app.modules.news;
 
    let appContainer = document.querySelector('#app-container');

    let newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
    newsController.initialize();
})(window);