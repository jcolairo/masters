function BreakfastMenuController(BreakfastMenuFactory) {
  var controller = this;

  controller.getCroissantMenus = function() {
    BreakfastMenuFactory.getCroissantMenus().then( function(success) {
      console.log('got getCroissantMenus():', success);
      controller.croissantMenus = success.data;
    },
    function(error) {
      console.warn('could not get getCroissantMenus():', error);
    });
  };

  controller.getMuffinMenus = function() {
    BreakfastMenuFactory.getMuffinMenus().then( function(success) {
      console.log('got getMuffinMenus():', success);
      controller.muffinMenus = success.data;
    },
    function(error) {
      console.warn('could not get getMuffinMenus():', error);
    });
  };

  controller.getDanishMenus = function() {
    BreakfastMenuFactory.getDanishMenus().then( function(success) {
      console.log('got getDanishMenus():', success);
      controller.danishMenus = success.data;
    },
    function(error) {
      console.warn('could not get getDanishMenus():', error);
    });
  };

  controller.getDonutMenus = function() {
    BreakfastMenuFactory.getDonutMenus().then( function(success) {
      console.log('got getDonutMenus():', success);
      controller.donutMenus = success.data;
    },
    function(error) {
      console.warn('could not get getDonutMenus():', error);
    });
  };

  controller.getBreakfastBagelMenus = function() {
    BreakfastMenuFactory.getBreakfastBagelMenus().then( function(success) {
      console.log('got getBreakfastBagelMenus():', success);
      controller.breakfastBagelMenus = success.data;
    },
    function(error) {
      console.warn('could not get getBreakfastBagelMenus():', error);
    });
  };

  controller.getBreakfastRollsMenus = function() {
    BreakfastMenuFactory.getBreakfastRollsMenus().then( function(success) {
      console.log('got getBreakfastRollsMenus():', success);
      controller.breakfastRollsMenus = success.data;
    },
    function(error) {
      console.warn('could not get getBreakfastRollsMenus():', error);
    });
  };

  controller.getBreakfastSandwichesMenus = function() {
    BreakfastMenuFactory.getBreakfastSandwichesMenus().then( function(success) {
      console.log('got getBreakfastSandwichesMenus():', success);
      controller.breakfastSandwichesMenus = success.data;
    },
    function(error) {
      console.warn('could not get getBreakfastSandwichesMenus():', error);
    });
  };

  controller.getBreakfastBaguettesMenus = function() {
    BreakfastMenuFactory.getBreakfastBaguettesMenus().then( function(success) {
      console.log('got getBreakfastBaguettesMenus():', success);
      controller.breakfastBaguettesMenus = success.data;
    },
    function(error) {
      console.warn('could not get getBreakfastBaguettesMenus():', error);
    });
  };

  controller.getFruitYoghurtMenus = function() {
    BreakfastMenuFactory.getFruitYoghurtMenus().then( function(success) {
      console.log('got getFruitYoghurtMenus():', success);
      controller.fruitYoghurtMenus = success.data;
    },
    function(error) {
      console.warn('could not get getFruitYoghurtMenus():', error);
    });
  };

  controller.getBreakfastDrinksMenus = function() {
    BreakfastMenuFactory.getBreakfastDrinksMenus().then( function(success) {
      console.log('got getBreakfastDrinksMenus():', success);
      controller.breakfastDrinksMenus = success.data;
    },
    function(error) {
      console.warn('could not get getBreakfastDrinksMenus():', error);
    });
  };

}

BreakfastMenuController.$inject = ['BreakfastMenuFactory'];

angular
  .module('MastersApp')
  .controller('BreakfastMenuController', BreakfastMenuController);
