import Dispatcher from './dispatcher';

export default class DispatcherProxy {
    constructor() {
        this._dispather = new Dispatcher(); 
    }

    register(callback) {
        if (!(callback instanceof Function)) {
            throw Error('Callback is not a function!');
        }

        this._dispather.register(callback);
    }

    unregister(id) {
        if (typeof id !== 'number') {
            throw Error('Id of callback is not a number!');
        }

        this._dispather.unregister(id);
    }

    dispatch(payload) {
        if (typeof payload === 'object' && 
            !(typeof payload.type === 'string')) {
            
            throw Error('Payload is not an object or have incorrect type property (should be string)!');
        }

        this._dispather.dispatch(payload);
    }
}