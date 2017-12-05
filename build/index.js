'use strict';

(function (window) {
    var _window$app$modules$n = window.app.modules.news,
        NewsController = _window$app$modules$n.controller,
        NewsModel = _window$app$modules$n.model,
        NewsView = _window$app$modules$n.view;


    var appContainer = document.querySelector('#app-container');

    var newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
    newsController.initialize();
})(window);