/**
 * Created by phaml_000 on 12/8/2015.
 */

App.controller('FixedHeaderController', function ($scope, $uibModal, $document, $state, $timeout) {
    $scope.user = "";
    $scope.OpenLoginModal = OpenLoginModal;
    $scope.ToogleMobileActive = ToogleMobileActive;

    $scope.animationsEnabled = true;



    function ToogleMobileActive(){
        $document.find("#header").toggleClass('mobile-active');
    }

    function OpenLoginModal(size){
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'LoginModalContent.html',
            controller: 'LoginModalController',
            size: size,
            resolve: {}
        });

        modalInstance.result.then(function (user) {
            $scope.user = user;
            $timeout(function(){$scope.user = ""}, 30000);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    }


});