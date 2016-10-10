'use strict';

var trelloApp = angular.module('trelloApp', [
    'ngRoute',
    'ngCookies',
    'nAuthApp.services'
]);

trelloApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/auth/:provider', {
            templateUrl: 'views/dashboard.html',
            controller: 'OAuthController'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'LoginController'
        })
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
})