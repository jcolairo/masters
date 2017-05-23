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
  .state('fingerMenu', {
    url: '/fingerMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@fingerMenu': {templateUrl: '/states/partials/menu/fingerMenu.html'}
    }
  })
  .state('setLunchMenu', {
    url: '/setLunchMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@setLunchMenu': {templateUrl: '/states/partials/menu/setLunchMenu.html'}
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

angular
  .module('MastersApp', ['ui.router'])
  .config(MainRouter);
