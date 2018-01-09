//Behavioral #1 Observer
export default class Dispatcher {
    constructor() {
        this.id = 0;
        this.callbacks = {};
    }

    register(callback) {
        this.callbacks[this.id++] = callback;
        //returned index in callback's array can be used as id of callback for future opereations (e.g., unsubscription)
        return this.callbacks.length - 1;
    }

    unregister(id) {
        delete this.callbacks[id];
    }

    dispatch(payload) {
        for (let id in this.callbacks) {
            this.callbacks[id](payload);
        }
    }
}

