/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _app$modules$news = _app2.default.modules.news,
    NewsController = _app$modules$news.controller,
    NewsModel = _app$modules$news.model,
    NewsView = _app$modules$news.view;


var appContainer = document.querySelector('#app-container');

var newsController = new NewsController(new NewsModel(), new NewsView(appContainer));
newsController.initialize();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    modules: {
        news: _index2.default
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _news = __webpack_require__(3);

var _news2 = _interopRequireDefault(_news);

var _news3 = __webpack_require__(4);

var _news4 = _interopRequireDefault(_news3);

var _news5 = __webpack_require__(6);

var _news6 = _interopRequireDefault(_news5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    controller: _news2.default,
    model: _news4.default,
    view: _news6.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsController = function () {
    function NewsController(newsModel, newsView) {
        _classCallCheck(this, NewsController);

        this.newsModel = newsModel;
        this.newsView = newsView;
    }

    _createClass(NewsController, [{
        key: 'initialize',
        value: function initialize() {
            var _this = this;

            this.newsView.onSourceSelected = this._onSourceSelected.bind(this);

            var newsPromises = Promise.all([this.newsModel.getAllSources(), this.newsModel.getNewsBySourceId(this.currentSourceId)]);

            newsPromises.then(function (responses) {
                var viewModel = {
                    sources: responses[0].sources,
                    news: responses[1].articles
                };

                _this.newsView.render(viewModel);
            });
        }
    }, {
        key: '_onSourceSelected',
        value: function _onSourceSelected(event) {
            var _this2 = this;

            this.currentSourceId = event.currentTarget.value;

            this.newsModel.getNewsBySourceId(this.currentSourceId).then(function (response) {
                var viewModel = {
                    news: response.articles
                };

                _this2.newsView.render(viewModel);
            });
        }
    }, {
        key: 'currentSourceId',
        get: function get() {
            return this._currentSourceId || 'bbc-news';
        },
        set: function set(sourceId) {
            this._currentSourceId = sourceId;
        }
    }, {
        key: 'newsModel',
        get: function get() {
            return this._newsModel || null;
        },
        set: function set(newsModel) {
            this._newsModel = newsModel;
        }
    }, {
        key: 'newsView',
        get: function get() {
            return this._newsView || null;
        },
        set: function set(newsView) {
            this._newsView = newsView;
        }
    }]);

    return NewsController;
}();

exports.default = NewsController;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsModel = function () {
    function NewsModel() {
        _classCallCheck(this, NewsModel);
    }

    _createClass(NewsModel, [{
        key: 'getNewsBySourceId',
        value: function getNewsBySourceId(sourceId) {
            var newsURL = 'https://newsapi.org/v2/top-headlines?sources=' + sourceId + '&apiKey=' + _config2.default.apiKey;

            return fetch(newsURL).then(function (res) {
                return res.json();
            });
        }
    }, {
        key: 'getAllSources',
        value: function getAllSources() {
            var sourcesURL = 'https://newsapi.org/v2/sources?apiKey=' + _config2.default.apiKey;

            return fetch(sourcesURL).then(function (res) {
                return res.json();
            });
        }
    }]);

    return NewsModel;
}();

exports.default = NewsModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    apiKey: '08b89c4033a940afb05cff722978ef19'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsView = function () {
    function NewsView(container) {
        _classCallCheck(this, NewsView);

        this.container = container;
    }

    _createClass(NewsView, [{
        key: '_constructSourcesSelect',
        value: function _constructSourcesSelect(sources) {
            var sourcesOptions = sources.map(function (item) {
                var isDefaultListItem = item.id === 'bbc-news';
                return '<option ' + (isDefaultListItem ? 'selected' : '') + ' value="' + item.id + '">' + item.name + '</option>';
            });

            var selectContainer = '\n            <div id="sources-select-container" class="sources-select-container">\n                <select class="sources-select" id="sources-select">' + sourcesOptions + '</select>\n            </div>\n        ';

            return selectContainer;
        }
    }, {
        key: '_constructNewsList',
        value: function _constructNewsList(news) {
            var _this = this;

            return news.map(function (item) {
                return '\n                <div class="news-item">\n                    <img class="photo" src="' + item.urlToImage + '" title=' + item.title + '></img>\n                    <div class="text-container">\n                        <a class="link" href="' + item.url + '" target="_blank">' + item.title + '</a>\n                        <p class="news-description">' + item.description + '</p>\n                        <div class="publish-time" >\n                            <span>' + _this._getFormattedPublishedTime(item.publishedAt) + '</span>\n                        </div>\n                    </div>\n                    \n\n                </div>\n            ';
            });

            return newsContainer;
        }
    }, {
        key: '_getFormattedPublishedTime',
        value: function _getFormattedPublishedTime(time) {
            if (!time) {
                return '';
            }

            time = new Date(time);

            return 'Published: ' + time.getDay() + '.' + time.getMonth() + '.' + time.getFullYear() + ' at ' + time.getHours() + ':' + time.getMinutes();
        }
    }, {
        key: 'render',
        value: function render(viewModel) {
            var isInitialization = !!viewModel.sources;

            if (isInitialization) {
                var selectContainer = this._constructSourcesSelect(viewModel.sources);
                var newsList = this._constructNewsList(viewModel.news);
                var _newsContainer = '\n                <div class="news-container" id="news-container">\n                    ' + newsList.join('') + '\n                </div>\n            ';

                this.container.innerHTML = selectContainer + _newsContainer;

                this.container.querySelector('#sources-select').addEventListener('change', this.onSourceSelected);
            } else {
                var _newsList = this._constructNewsList(viewModel.news);
                this.container.querySelector('#news-container').innerHTML = _newsList.join('');
            }
        }
    }, {
        key: 'container',
        get: function get() {
            return this._container;
        },
        set: function set(container) {
            this._container = container;
        }
    }, {
        key: 'onSourceSelected',
        get: function get() {
            return this._onSourceSelected || null;
        },
        set: function set(onSourceSelected) {
            this._onSourceSelected = onSourceSelected;
        }
    }]);

    return NewsView;
}();

exports.default = NewsView;

/***/ })
/******/ ]);