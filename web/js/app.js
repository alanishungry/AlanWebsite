/**
 * Created by alanguo on 8/6/16.
 */

var alanWebsite = angular.module('alanWebsiteApp', ['ngRoute']);
alanWebsite.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .when('/projects', {
            templateUrl: '../views/projects.html',
            controller: 'projectsCtrl'
        })
        .when('/resume', {
            templateUrl: '../views/resume.html',
            controller: 'resumeCtrl'
        })
        .when('/contact', {
            templateUrl: '../views/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
});
