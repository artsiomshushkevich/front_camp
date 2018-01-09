import NewsModuleAdapter from './adapters/news.adapter';

export default class App {
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
