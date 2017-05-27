function LunchMenuController(LunchMenuFactory) {
  var controller = this;

  controller.getNames = function() {
    LunchMenuFactory.getAll().then( function(success) {
      console.log('got names:', success);
      controller.names = success.data;
    },
      function(error) {
        console.warn('could not get names:', error);
      });
  };

  controller.getSetLunchMenus = function() {
    LunchMenuFactory.getSetLunchMenus().then( function(success) {
      console.log('got getSetLunchMenus():', success);
      controller.setLunchMenus = success.data;
    },
      function(error) {
        console.warn('could not get getSetLunchMenus():', error);
      });
  };

  controller.getFingerMenus = function() {
    LunchMenuFactory.getFingerMenus().then( function(success) {
      controller.fingerMenus = success.data;
      console.log('got getFingerMenus():', success);
    },
      function(error) {
        console.warn('could not get getFingerMenus():', error);
      });
  };

  controller.getColdForkMenus = function() {
    LunchMenuFactory.getColdForkMenus().then( function(success) {
      console.log('got getColdForkMenus():', success);
      controller.coldForkMenus = success.data;
    },
      function(error) {
        console.warn('could not get getColdForkMenus():', error);
      });
  };

  controller.getHotForkMenus = function() {
    LunchMenuFactory.getHotForkMenus().then( function(success) {
      console.log('got getHotForkMenus():', success);
      controller.getHotForkMenus = success.data;
    },
      function(error) {
        console.warn('could not get getHotForkMenus():', error);
      });
  };

  controller.getPlatterMenus = function() {
    LunchMenuFactory.getPlatterMenus().then( function(success) {
      console.log('got getPlatterMenus():', success);
      controller.getPlatterMenus = success.data;
    },
      function(error) {
        console.warn('could not get getPlatterMenus():', error);
      });
  };

  controller.getDrinksMenus = function() {
    LunchMenuFactory.getDrinksMenus().then( function(success) {
      console.log('got getDrinksMenus():', success);
      controller.getDrinksMenus = success.data;

    },
      function(error) {
        console.warn('could not get getDrinksMenus():', error);
      });
  };
}

LunchMenuController.$inject = ['LunchMenuFactory'];

angular
  .module('MastersApp')
  .controller('LunchMenuController', LunchMenuController);
