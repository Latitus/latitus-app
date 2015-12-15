/**
 * Created by phaml_000 on 12/10/2015.
 */
App.directive('loading', function ($rootScope) {

    return {
        restrict: 'AE',
        template: '<div class="loading"><div class="loading-icon"></div></div>',
        link: function (scope, element) {
            var $elm = $(element).find('.loading');

            //$elm.fadeOut(0);

            $rootScope.$on('loading:show', function () {
                $elm.addClass('active');
            });

            $rootScope.$on('loading:hide', function () {
                $elm.removeClass('active');
            });
        }
    }

});