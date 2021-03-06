import DispatcherProxy from '../../utils/dispatcher.proxy';

class NewsStore {
    constructor() {
        this._emitter = new DispatcherProxy();
    }

    get news() {
        return this._news;
    }

    set news(news) {
        this._news = news;
    }

    get sources() {
        return this._sources;
    }

    set sources(sources) {
        this._sources = sources;
    }

    addEventListener(callback) {
        return this._emitter.register(callback);
    }

    removeEventListener(listenerId) {
        this._emitter.unregister(listenerId);
    }

    emit() {
        this._emitter.dispatch();
    }
}

export default NewsStore;
 