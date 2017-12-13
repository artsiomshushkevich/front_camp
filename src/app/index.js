import mainStyles from '../styles/main.css'

(() => {
    const showNewsBtn = document.querySelector('#show-news-btn');
    showNewsBtn.addEventListener('click', function() {
        import(/* webpackChunkName: "app" */ './app').then((module) => {
            const app = module.default;
    
            const { 
                controller: NewsController,
                model: NewsModel,
                view: NewsView
            } = app.modules.news;
            
            let appContainer = document.querySelector('#app-container');
            
            let newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
            newsController.initialize();
    
        });
    });
    
})();


