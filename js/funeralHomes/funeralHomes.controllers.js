(function() {
  'use strict';
  angular.module('marigold')
  .controller('FuneralHomeController', FuneralHomeController)
  .controller('FuneralHomeShowController', FuneralHomeShowController)

FuneralHomeController.$inject = ['FuneralHomeResource', '$http'];
FuneralHomeShowController.$inject = ['FuneralHomeResource', '$stateParams', '$http'];


function FuneralHomeController(FuneralHomeResource, $http) {

  var vm = this;
  vm.funeralHomes = [];
  vm.cities = ['Oxnard', 'Santa Paula']
  vm.selectedCity = 'No City Selected'

  FuneralHomeResource.query().$promise.then(function(data) {
   vm.funeralHomes = data;
 });

}

function FuneralHomeShowController(FuneralHomeResource, $stateParams, $http){
  var vm = this;
  vm.funeralHome = {}
  vm.yelp = {}

  FuneralHomeResource.get({id: $stateParams.id}).$promise.then(function(jsonFuneralHome) {
    vm.funeralHome = jsonFuneralHome;
  }).then(function() {
    $http({
    method: 'GET',
    url: 'http://localhost:3000/api/yelp/' + vm.funeralHome.yelpId
    }).then(function successCallback(yelpData) {
    vm.yelp = yelpData.data;
    }, function errorCallback(response) {
      console.log(response)
    });
  })



}

}());
