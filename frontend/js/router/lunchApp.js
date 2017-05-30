function LunchMainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('fingerMenu', {
    url: '/fingerMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@fingerMenu': {templateUrl: '/states/partials/menu/lunchMenu/fingerMenu.html'}
    }
  })
  .state('setLunchMenu', {
    url: '/setLunchMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@setLunchMenu': {templateUrl: '/states/partials/menu/lunchMenu/setLunchMenu.html'}
    }
  })
  .state('coldForkMenu', {
    url: '/coldForkMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@coldForkMenu': {templateUrl: '/states/partials/menu/lunchMenu/coldForkMenu.html'}
    }
  })
  .state('hotForkMenu', {
    url: '/hotForkMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@hotForkMenu': {templateUrl: '/states/partials/menu/lunchMenu/hotForkMenu.html'}
    }
  })
  .state('platterMenu', {
    url: '/platterMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@platterMenu': {templateUrl: '/states/partials/menu/lunchMenu/platterMenu.html'}
    }
  })
  .state('drinksMenu', {
    url: '/drinksMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@drinksMenu': {templateUrl: '/states/partials/menu/lunchMenu/drinksMenu.html'}
    }
  });
  $urlRouterProvider.otherwise('/');
}

LunchMainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('MastersApp')
  .config(LunchMainRouter);
