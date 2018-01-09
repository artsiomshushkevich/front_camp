import mainStyles from '../styles/main.css';

import App from './app';
import AppDispatcher from './app.dispatcher';

(() => {
    const showNewsBtn = document.querySelector('#show-news-btn');
    showNewsBtn.addEventListener('click', function() {
        import(/* webpackChunkName: "app" */ './app').then((module) => {
            const app = new App();
            const newsModule = app.createModule('news');

            const appContainer = document.querySelector('#app-container');
            const NewsView = newsModule.getView();
            const newsViewInstance = new NewsView(appContainer);

            const NewsStore = newsModule.getStore();
            const newsStoreInstance = new NewsStore();
            newsStoreInstance.addEventListener(function() {
                const state = {
                    news: newsStoreInstance.news,
                    sources: newsStoreInstance.sources
                };

                newsViewInstance.render(state);
            });

            const appDispatcher = AppDispatcher.instance;
            const newsActions = newsModule.getActions();
            appDispatcher.register((payload) => {
                const actionType = payload.type;
        
                switch(actionType) {
                    case newsActions.GET_NEWS_BY_SOURCE_ID:
                        newsStoreInstance.news = payload.news;
                        break;
                    case newsActions.INITIALIZE: 
                        newsStoreInstance.news = payload.news;
                        newsStoreInstance.sources = payload.sources;
                        break;
                        
                }

                newsStoreInstance.emit();
            });

            const NewsActionCreator = newsModule.getActionCreator();
            NewsActionCreator.initialize();
        });
    });
    
})();


