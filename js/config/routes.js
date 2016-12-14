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
      })
      .state('funeralHomeShow', {
        url: '/funeralHomes/:id',
        templateUrl: 'js/funeralHomes/funeralHomes-show.html',
        controller: 'FuneralHomeShowController',
        controllerAs: 'funeralHomeShowVm'
      })
      .state('directCremationShow', {
        url: '/directCremationShow/:id',
        templateUrl: 'js/funeralHomes/funeralHomes-DCShow.html',
        controller: 'FuneralHomeShowController',
        controllerAs: 'funeralHomeShowVm'
      })
      .state('traditionalCremationShow', {
        url: '/traditionalCremationShow/:id',
        templateUrl: 'js/funeralHomes/funeralHomes-TCShow.html',
        controller: 'FuneralHomeShowController',
        controllerAs: 'funeralHomeShowVm'
      })
      .state('traditionalBurialShow', {
        url: '/traditionalBurialShow/:id',
        templateUrl: 'js/funeralHomes/funeralHomes-TBShow.html',
        controller: 'FuneralHomeShowController',
        controllerAs: 'funeralHomeShowVm'
      })
      .state('contactForm', {
        url: '/contactForm/:id',
        templateUrl: 'js/funeralHomes/funeralHomes-Contact.html',
        controller: 'ContactFormController',
        controllerAs: 'contactFormVm'
      });
  }
}());
