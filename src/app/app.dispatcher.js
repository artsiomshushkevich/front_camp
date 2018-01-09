import DispatcherProxy from './utils/dispatcher.proxy';

export default class AppDispatcher extends DispatcherProxy {
    constructor() {
        super();
    }

    static get instance() {
        if (!this._instance) {
            this._instance = new AppDispatcher();
        }

        return this._instance;
    }
}