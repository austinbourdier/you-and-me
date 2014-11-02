'use strict';

var app = angular
  .module('yamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  app.config([ '$routeProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
  function (  $routeProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider ) {
    /* routes, views, controllers */
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .state('signup', {
        url: '/',
        templateUrl: 'views/signup.html',
        controller: 'AuthCtrl'
      })
  }]);
