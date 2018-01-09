import BaseModule from './base.module';
import NewsModule from '../modules/news/index';

export default class NewsModuleAdapter extends BaseModule {
    constructor() {
        super();
        this._newsModule = new NewsModule();
    }

    getActions() {
        return this._newsModule.getNewsActions();
    }

    getActionCreator() {
        return this._newsModule.getNewsActionCreator();
    }

    getView() {
        return this._newsModule.getNewsView();
    }

    getStore() {
        return this._newsModule.getNewsStore();
    }
}
