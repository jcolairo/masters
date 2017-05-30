function OrderController($state, $stateParams, OrderFactory) {
  var controller = this;
  var canShowOrder = false;

  controller.getFood = function() {
    console.log('getFood()');
    var foodId = $stateParams.foodId;
    OrderFactory.getOne(foodId).then(
      function success(response) {
        console.log('created new food:', response.data);
        controller.selectedFood = response.data;
      },
      function error(error) {
        console.warn('Error getting food:', error);
      });
  };

  controller.addFood = function () {
    console.log('addFood()');
    OrderFactory.createOne(controller.newFood).then(
    function success(response) {
      console.log('Created new food:', response);
      $state.go('order');
    },
    function error(error) {
      console.warn('Error creating food:', error);
    });
  };

  controller.toggleOrder = function() {
    canShowOrder = !canShowOrder;
  };

  controller.isOrderVisible = function() {
    return canShowOrder;
  };

  function init() {
    controller.selectedFood = undefined;
    controller.newFood = {};
  }
  init();
}

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
