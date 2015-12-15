/**
 * Created by phaml_000 on 12/7/2015.
 */

App.config(function ($stateProvider, $urlRouterProvider, AppUrlProvider) {
    var baseUrl = AppUrlProvider.baseUrl;

    $urlRouterProvider.otherwise('');

    $stateProvider
        .state('lachitus', {
            url: '',
            views: {
                '@': {
                    controller: 'AppController',
                    templateUrl: baseUrl('tmpl/template.html')
                },

                'fixed-header@lachitus':{
                    controller: 'FixedHeaderController',
                    templateUrl: baseUrl('tmpl/fixed-header.html')
                },

                'footer@lachitus':{
                    templateUrl: baseUrl('tmpl/footer.html')
                }
            }
        })
        .state('lachitus.home', {
            url: '/home',
            controller: 'HomePageController',
            templateUrl: baseUrl('tmpl/main/home-page.html')
        })
        .state('lachitus.about-us',{
            url: '/about-us',
            templateUrl: baseUrl('tmpl/main/about-us.html')
        })
});