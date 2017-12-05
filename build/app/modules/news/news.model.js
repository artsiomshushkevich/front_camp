'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window) {
    var apiKey = window.app.config.apiKey;

    var NewsModel = function () {
        function NewsModel() {
            _classCallCheck(this, NewsModel);
        }

        _createClass(NewsModel, [{
            key: 'getNewsBySourceId',
            value: function getNewsBySourceId(sourceId) {
                var newsURL = 'https://newsapi.org/v2/top-headlines?sources=' + sourceId + '&apiKey=' + apiKey;

                return fetch(newsURL).then(function (res) {
                    return res.json();
                });
            }
        }, {
            key: 'getAllSources',
            value: function getAllSources() {
                var sourcesURL = 'https://newsapi.org/v2/sources?apiKey=' + apiKey;

                return fetch(sourcesURL).then(function (res) {
                    return res.json();
                });
            }
        }]);

        return NewsModel;
    }();

    window.app.modules.news.model = NewsModel;
})(window);