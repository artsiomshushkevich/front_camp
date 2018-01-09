import NewsModuleAdapter from './adapters/news.adapter';

export default class App {
    //Creational #1 Factory method
    createModule(moduleName) {
        let newModule = null;

        switch (moduleName) {
            case 'news':
                newModule = new NewsModuleAdapter();
                break;
        }

        return newModule;
    }
}
