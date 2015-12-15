/**
 * Created by phaml_000 on 12/8/2015.
 */
App.controller('HomePageController', function ($scope, $window) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.onResizeWindow = onResizeWindow;

    var slides = $scope.slides = [
        {
            image: "images/slide/1.png",
            text:""
        },
        {
            image: "images/slide/2.png",
            text:""
        },
        {
            image: "images/slide/3.png",
            text:""
        },
        {
            image: "images/slide/4.png",
            text:""
        },
        {
            image: "images/slide/5.png",
            text:""
        }
    ];


    var categories = $scope.categories = [
        {
            image: "images/category/clothing126.png",
            text: "Clothes"
        },
        {
            image: "images/category/clothing134.png",
            text: "Shoes"
        },
        {
            image: "images/category/belt3.png",
            text: "Belts"
        },
        {
            image: "images/category/bag46.png",
            text: "Bag"
        },
        {
            image: "images/category/pearl.png",
            text: "Accessories"
        }
    ];

    $scope.totalItems = 10;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    function onResizeWindow(){
        var width = $scope.windowWidth;
        if(width > 1199) { // screen-lg-min
            $scope.itemsPerPage = 5;
        } else if(width > 991) { // screen-md-min
            $scope.itemsPerPage = 3;
        } else if(width > 767){ //screen-sm-min
            $scope.itemsPerPage = 3;
        } else{ //screen-sx-min
            $scope.itemsPerPage = 2;
        }
//        $scope.$digest();
    }

});