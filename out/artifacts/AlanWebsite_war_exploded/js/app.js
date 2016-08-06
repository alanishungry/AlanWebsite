/**
 * Created by alanguo on 8/6/16.
 */

var alanWebsite = angular.module('alanWebsiteApp', ['ngRoute']);
alanWebsite.config(function($routeProvider){
    $routeProvider
        .when('/', {
        controller: 'homeCtrl',
        templateUrl: '../views/home.html'
        })
        .when ('/test', {
            templateUrl: '../views/test.html'
        })
});
//
//var controllers = {};
//controllers.testController = function($scope){
//    $scope.first = "Info";
//    $scope.customers=[
//        {name:'jerry',city:'chicago'},
//        {name:'tom',city:'houston'},
//        {name:'enslo',city:'taipei'}
//    ];
//}
//
//alanWebsite.controller(controllers)
