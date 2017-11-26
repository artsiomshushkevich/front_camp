(() => {
    const { 
        controller: NewsController,
        model: NewsModel,
        view: NewsView
    } = this.app.modules.news;
 
    let appContainer = document.querySelector('#app-container');

    let newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
    newsController.initialize();
})();