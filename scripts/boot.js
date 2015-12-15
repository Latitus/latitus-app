/**
 * Created by phaml_000 on 12/9/2015.
 */
App.run(function ($rootScope, $state, $data, $httpBackend, ServerDataModel) {
    $rootScope.$state = $state;
    $rootScope.$data = $data;

    $httpBackend.whenPOST('signin').respond(function(method, url, data){
        var params = angular.fromJson(data);
        var res = ServerDataModel.SignIn(params);
        return [200, res, {}];
    });

    $httpBackend.whenPOST('signup').respond(function(method, url, data){
        var params = angular.fromJson(data);
        var res = ServerDataModel.SignUp(params);
        return [200, res, {}];
    });

    $httpBackend.whenGET(/tmpl\/.*/).passThrough();
});