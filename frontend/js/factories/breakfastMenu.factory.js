function BreakfastMenuFactory($http) {
  return {
    getCroissantMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/croissantMenu'
      });
    },
    getMuffinMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/muffinsMenu'
      });
    },
    getDanishMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/danishesMenu'
      });
    },
    getDonutMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/donutsMenu'
      });
    },
    getBreakfastBagelMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/breakfastBagelsMenu'
      });
    },
    getBreakfastRollsMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/breakfastRollsMenu'
      });
    },
    getBreakfastSandwichesMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/breakfastSandwichesMenu'
      });
    },
    getBreakfastBaguettesMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/breakfastBaguettesMenu'
      });
    },
    getFruitYoghurtMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/fruitYoghurtMenu'
      });
    },
    getBreakfastDrinksMenus: function() {
      return $http({
        method: 'GET',
        url: '/api/breakfastDrinksMenu'
      });
    }
  };
}

BreakfastMenuFactory.$inject= ['$http'];

angular
  .module('MastersApp')
  .factory('BreakfastMenuFactory', BreakfastMenuFactory);
