import mainStyles from '../styles/main.css';

import NewsView from './modules/news/news.view';
import newsStore from './modules/news/news.store';
import newsActions from './modules/news/news.actions';
import newsActionCreator from './modules/news/news.action-creator';
import appDispatcher from './app.dispatcher';

(() => {
    const showNewsBtn = document.querySelector('#show-news-btn');
    showNewsBtn.addEventListener('click', function() {
        import(/* webpackChunkName: "app" */ './app').then((module) => {
            let appContainer = document.querySelector('#app-container');
            let newsView = new NewsView(appContainer);

            newsStore.addEventListener(function() {
                const state = {
                    news: newsStore.news,
                    sources: newsStore.sources
                };

                newsView.render(state);
            });

            appDispatcher.register((payload) => {
                const actionType = payload.type;
        
                switch(actionType) {
                    case newsActions.GET_NEWS_BY_SOURCE_ID:
                        newsStore.news = payload.news;
                        break;
                    case newsActions.INITIALIZE: 
                        newsStore.news = payload.news;
                        newsStore.sources = payload.sources;
                        break;
                        
                }

                newsStore.emit();
            });

            newsActionCreator.initialize();
        });
    });
    
})();


