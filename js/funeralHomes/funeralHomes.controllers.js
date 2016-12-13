(function() {
  'use strict';
  angular.module('marigold')
  .controller('FuneralHomeController', FuneralHomeController)
  .controller('FuneralHomeShowController', FuneralHomeShowController)

FuneralHomeController.$inject = ['FuneralHomeResource'];
FuneralHomeShowController.$inject = ['FuneralHomeResource', '$stateParams'];


function FuneralHomeController(FuneralHomeResource) {

  var vm = this;
  vm.funeralHomes = [];
  vm.cities = ['Oxnard', 'Santa Paula']
  vm.selectedCity = 'No City Selected'

  FuneralHomeResource.query().$promise.then(function(data) {
   vm.funeralHomes = data;
 });
}

function FuneralHomeShowController(FuneralHomeResource, $stateParams){
  var vm = this;
  vm.funeralHome = {}

  FuneralHomeResource.get({id: $stateParams.id}).$promise.then(function(jsonFuneralHome) {
    vm.funeralHome = jsonFuneralHome;
    console.log(vm.funeralHome)
  });
}

}());
