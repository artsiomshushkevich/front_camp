import mainStyles from '../styles/main.css';

import NewsView from './modules/news/views/news.view';
import newsStore from './modules/news/news.store';
import appDispatcher from './app.dispatcher';
import NewsActionCreator from './modules/news/news.action-creator';

(() => {
    const showNewsBtn = document.querySelector('#show-news-btn');
    showNewsBtn.addEventListener('click', function() {
        import(/* webpackChunkName: "app" */ './app').then((module) => {
            // const app = module.default;
    
            // const { 
            //     controller: NewsController,
            //     model: NewsModel,
            //     view: NewsView
            // } = app.modules.news;
            
            // let appContainer = document.querySelector('#app-container');
            
            // let newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
            // newsController.initialize();
            let appContainer = document.querySelector('#app-container');
            let newsView = new NewsView(appContainer);

            newsStore.addEventListener(function() {
                newsView.render(newsStore.news);
            });

            appDispatcher.register((payload) => {
                const actionType = payload.type;
                const actions = NewsActionCreator.actions;

                switch(actionType) {
                    case actions.GET_NEWS_BY_SOURCE_ID:
                        newsStore.news = payload.news;
                        newsStore.emit();
                        break;
                }
            });

            NewsActionCreator.getNewsBySourceId('bbc-news');
        });
    });
    
})();


