/**
 * Created by phaml_000 on 12/7/2015.
 */

var App = angular.module('MyApp', [
    'ui.router',
    'ui.bootstrap',
    'ngMockE2E',
    'mgcrea.ngStrap'
]);

App.provider('AppGlobalData', function(){
    var GlobalData = window._AppGlobalData;
    GlobalData.$get = function(){
        return GlobalData;
    }
    return GlobalData;
});

App.provider('AppUrl', function (AppGlobalDataProvider) {

    var Url = {};

    Url.baseUrl = function (url) {
        return AppGlobalDataProvider.Url.base + url;
    };

    Url.apiUrl = function (url) {
        return AppGlobalDataProvider.Url.api + url;
    };

    Url.$get = function () {
        return Url;
    };

    return Url;

});

App.factory('$data', function () {

    var data = {};

    return {

        set: function (key, value) {
            data[key] = value;
        },

        get: function (key, df) {
            return data[key] || df;
        },

        is: function (key, value, ignoreCase) {
            var v1, v2;

            if (typeof(value) === 'object') {
                v1 = JSON.stringify(data[key]);
                v2 = JSON.stringify(value);
            } else {
                v1 = data[key];
                v2 = value;
            }

            if (ignoreCase) {
                v1 = v1 && v1.toLowerCase();
                v2 = v2 && v2.toLowerCase();
            }

            return v1 === v2;
        }

    };

});

App.config(function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');

    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
});

