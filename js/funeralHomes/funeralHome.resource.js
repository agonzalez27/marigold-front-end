(function() {
  'use strict';
  angular.module('marigold')
    .factory('FuneralHomeResource', FuneralHomeResource);

  FuneralHomeResource.$inject = ['$resource'];

  function FuneralHomeResource($resource) {
    return $resource('https://marigold-api.herokuapp.com/api/funeralHomes/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
