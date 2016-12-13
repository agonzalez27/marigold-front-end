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

  FuneralHomeResource.query().$promise.then(function(data) {
   vm.funeralHomes = data;
 });
}

function FuneralHomeShowController(FuneralHomeResource, $stateParams){
  FuneralHomeResource.get({id: $stateParams.id}).$promise.then(function(jsonFuneralHome) {
    vm.funeralHome = jsonFuneralHome;
  });
}

}());
