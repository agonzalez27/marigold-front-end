(function() {
  'use strict';
  angular.module('marigold')
    .factory('FuneralHomeResource', FuneralHomeResource);

  FuneralHomeResource.$inject = ['$resource'];

  function FuneralHomeResource($resource) {
    return $resource('http://localhost:3000/api/funeralHomes/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
