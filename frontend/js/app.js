function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@home': {templateUrl: '/states/partials/home/home.html'}
    }
  })
  .state('menu', {
    url: '/menu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@menu': {templateUrl: '/states/partials/menu/menu.html'}
    }
  })
  .state('lunchMenuNav', {
    url: '/lunchMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@lunchMenuNav': {templateUrl: '/states/partials/menu//nav/lunchMenuNav.html'}
    }
  })
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
  })
  .state('contact', {
    url: '/contact',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@contact': {templateUrl: '/states/partials/contact/contact.html'}
    }
  })
  .state('about', {
    url: '/about',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@about': {templateUrl: '/states/partials/about/about.html'}
    }
  })
  .state('portfolio-connect4', {
    url: '/portfolio/connect4',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-connect4': {templateUrl: '/states/partials/portfolio/connect4.html'}
    }
  })
  .state('portfolio-movies', {
    url: '/portfolio/movies',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-movies': {templateUrl: '/states/partials/portfolio/movies.html'}
    }
  })
  .state('portfolio-police', {
    url: '/portfolio/police',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@portfolio-police': {templateUrl: '/states/partials/portfolio/police.html'}
    }
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('MastersApp', ['ui.router'])
  .config(MainRouter);
