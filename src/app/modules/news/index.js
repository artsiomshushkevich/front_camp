import newsActions from './news.actions';
import NewsActionCreator from './news.action-creator';
import NewsStore from './news.store'
import NewsView from './news.view';

export default class NewsModule {
    getNewsActions() {
        return newsActions;
    }

    getNewsActionCreator() {
        return NewsActionCreator;
    }

    getNewsStore() {
        return NewsStore;
    }

    getNewsView() {
        return NewsView;
    }
}
