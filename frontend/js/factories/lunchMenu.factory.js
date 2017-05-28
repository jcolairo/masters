function LunchMenuFactory($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/names'
      });
    },
    getSetLunchMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/setLunchMenu'
      });
    },
    getFingerMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/fingerMenu'
      });
    },
    getColdForkMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/coldForkMenu'
      });
    },
    getHotForkMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/hotForkMenu'
      });
    },
    getPlatterMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/platterMenu'
      });
    },
    getDrinksMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/drinksMenu'
      });
    }
  };
}

LunchMenuFactory.$inject= ['$http'];

angular
  .module('MastersApp')
  .factory('LunchMenuFactory', LunchMenuFactory);
