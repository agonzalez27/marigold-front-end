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

 //  FuneralHomeResource.query().$promise.then(function(data) {
 //   vm.funeralHomes = data;
 // });
 $http.get('https://api.yelp.com/v3/businesses/garcia-mortuary-oxnard', {
   headers: {
     Authorization: 'Bearer DMPhWN0AwnOoL6EVFifWMHH3S2NalpivlG5xFM8Go1cA4mHKHm9hROlxybH-jt-oVc_86l93QZ9NAPwwX0u8M-Y6E3nfTvF4Tx4oLE_9x5k6TQBq9qoAa2dXIZ9RWHYx'
   }
 }).then(function successCallback(yelpData) {
   vm.yelpData = yelpData
   console.log(yelpData)
 }, function errorCallback(response) {
   console.log(response)
 });


}

function FuneralHomeShowController(FuneralHomeResource, $stateParams, $http){
  var vm = this;
  vm.funeralHome = {}
  vm.yelpData = {}

  FuneralHomeResource.get({id: $stateParams.id}).$promise.then(function(jsonFuneralHome) {
    vm.funeralHome = jsonFuneralHome;
  }).then(function() {
    $http.get('https://api.yelp.com/v3/businesses/' + vm.funeralHome.yelpId, {
      headers: {
        Authorization: 'Bearer DMPhWN0AwnOoL6EVFifWMHH3S2NalpivlG5xFM8Go1cA4mHKHm9hROlxybH-jt-oVc_86l93QZ9NAPwwX0u8M-Y6E3nfTvF4Tx4oLE_9x5k6TQBq9qoAa2dXIZ9RWHYx'
      }
    }).then(function successCallback(yelpData) {
      vm.yelpData = yelpData
      console.log(yelpData)
    }, function errorCallback(response) {
      console.log(response)
    });
  });
}

}());
