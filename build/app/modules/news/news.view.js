'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window) {
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

                var selectContainer = '\n                <div id="sources-select-container" class="sources-select-container">\n                    <select class="sources-select" id="sources-select">' + sourcesOptions + '</select>\n                </div>\n            ';

                return selectContainer;
            }
        }, {
            key: '_constructNewsList',
            value: function _constructNewsList(news) {
                var _this = this;

                return news.map(function (item) {
                    return '\n                    <div class="news-item">\n                        <img class="photo" src="' + item.urlToImage + '" title=' + item.title + '></img>\n                        <div class="text-container">\n                            <a class="link" href="' + item.url + '" target="_blank">' + item.title + '</a>\n                            <p class="news-description">' + item.description + '</p>\n                            <div class="publish-time" >\n                                <span>' + _this._getFormattedPublishedTime(item.publishedAt) + '</span>\n                            </div>\n                        </div>\n                        \n\n                    </div>\n                ';
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
                    var _newsContainer = '\n                    <div class="news-container" id="news-container">\n                        ' + newsList.join('') + '\n                    </div>\n                ';

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

    window.app.modules.news.view = NewsView;
})(window);