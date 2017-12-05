'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window) {
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

    window.app.modules.news.controller = NewsController;
})(window);