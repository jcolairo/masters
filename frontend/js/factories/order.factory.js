function OrderFactory($http) {
  return {
    getOne: function() {
      return $http({
        method: 'GET',
        url: `/api/croissantMenu`
      });
    },
    createOne: function(newFood) {
      return $http({
        method: 'POST',
        url: `/api/croissantMenu`,
        data: newFood
      });
    }
  };
}

OrderFactory.$inject= ['$http'];

angular
  .module('MastersApp')
  .factory('OrderFactory', OrderFactory);
