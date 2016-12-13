(function() {
  'use strict';

  angular.module('marigold')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.html'
      })
      .state('funeralHomesList', {
        url: '/funeralHomes/list',
        templateUrl: 'js/funeralHomes/funeralHomes-list.html',
        controller: 'FuneralHomeController',
        controllerAs: 'funeralHomeListVm'
      });
  }
}());
