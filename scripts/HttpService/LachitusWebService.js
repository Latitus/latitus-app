/**
 * Created by phaml_000 on 12/8/2015.
 */

App.factory('LachitusWebService', function (HttpService) {
    var proxy = {
        signIn: 'POST signin',
        signUp: 'POST signup'
    };

    return HttpService.create(proxy);
});