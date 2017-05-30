function BreakfastMainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('croissantMenu', {
    url: '/croissantMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@croissantMenu': {templateUrl: '/states/partials/menu/breakfastMenu/croissantMenu.html'}
    }
  })
  .state('muffinMenu', {
    url: '/muffinMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@muffinMenu': {templateUrl: '/states/partials/menu/breakfastMenu/muffinMenu.html'}
    }
  })
  .state('danishMenu', {
    url: '/danishMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@danishMenu': {templateUrl: '/states/partials/menu/breakfastMenu/danishMenu.html'}
    }
  })
  .state('donutMenu', {
    url: '/donutMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@donutMenu': {templateUrl: '/states/partials/menu/breakfastMenu/donutMenu.html'}
    }
  })
  .state('breakfastBagelMenu', {
    url: '/breakfastBagelMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastBagelMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastBagelMenu.html'}
    }
  })
  .state('breakfastRollsMenu', {
    url: '/breakfastRollsMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastRollsMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastRollsMenu.html'}
    }
  })
  .state('breakfastSandwichesMenu', {
    url: '/breakfastSandwichesMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastSandwichesMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastSandwichesMenu.html'}
    }
  })
  .state('breakfastBaguettesMenu', {
    url: '/breakfastBaguettesMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastBaguettesMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastBaguettesMenu.html'}
    }
  })
  .state('fruitYoghurtMenu', {
    url: '/fruitYoghurtMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@fruitYoghurtMenu': {templateUrl: '/states/partials/menu/breakfastMenu/fruitYoghurtMenu.html'}
    }
  })
  .state('breakfastDrinksMenu', {
    url: '/breakfastDrinksMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastDrinksMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastDrinksMenu.html'}
    }
  });
  $urlRouterProvider.otherwise('/');
}

BreakfastMainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('MastersApp')
  .config(BreakfastMainRouter);
