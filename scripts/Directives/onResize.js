/**
 * Created by phaml_000 on 12/10/2015.
 */
App.directive('resizeWindowListener', function ($window) {
    return function (scope, element, attr) {
        var w = angular.element($window);
        scope.$watch(function () {
            return {
                'h': window.innerHeight,
                'w': window.innerWidth
            };
        }, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            scope.$eval(attr.onResize);

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }

});