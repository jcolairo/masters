function LunchMenuFactory($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: ''
      });
    }
  };
}

LunchMenuFactory.$inject= ['$http'];

angular
  .module('MastersApp')
  .factory('LunchMenuFactory', LunchMenuFactory);
