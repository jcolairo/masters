function LunchMenuFactory($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/names'
      });
    },
    getAllMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/menus'
      });
    }
  };
}

LunchMenuFactory.$inject= ['$http'];

angular
  .module('MastersApp')
  .factory('LunchMenuFactory', LunchMenuFactory);
