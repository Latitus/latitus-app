/**
 * Created by phaml_000 on 12/8/2015.
 */

App.controller('LoginModalController', function ($scope, $uibModalInstance, LachitusWebService) {
    $scope.loginData = {
        username: "" ,
        password: ""
    };
    $scope.inSignIn = true;

    $scope.ToogleSignInSignUp = ToogleSignInSignUp;
    $scope.SignIn = SignIn;

    function SignIn(){
        LachitusWebService.signIn($scope.loginData).then(function(){
            $uibModalInstance.close($scope.loginData.username);
        }).catch(function(){
            console.log("SignIn:failed");
        });
    }
    function ToogleSignInSignUp(){
        $scope.inSignIn = !$scope.inSignIn;
    }
    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});