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
      'main@lunchMenuNav': {templateUrl: '/states/partials/menu/nav/lunchMenuNav.html'}
    }
  })
  .state('breakfastMenuNav', {
    url: '/breakfastMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastMenuNav': {templateUrl: '/states/partials/menu/nav/breakfastMenuNav.html'}
    }
  })

  .state('contact', {
    url: '/contact',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@contact': {templateUrl: '/states/partials/contact/contact.html'}
    },
    resolve: {
      currentAuth: [
        'AuthFactory',
        function (AuthFactory) {
          return AuthFactory.$requireSignIn();
        }
      ]
    }
  })
  .state('about', {
    url: '/about',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@about': {templateUrl: '/states/partials/about/about.html'}
    },
    resolve: {
      currentAuth: [
        'AuthFactory',
        function (AuthFactory) {
          return AuthFactory.$requireSignIn();
        }
      ]
    }
  })
  .state('auth-required', {
    url: '/auth-required',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@auth-required': {templateUrl: '/states/partials/auth/auth-required.html'}
    }
  })
  .state('login', {
    url: '/login',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@login': {templateUrl: '/states/partials/auth/login.html'}
    }
  })
  .state('signup', {
    url: '/signup',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@signup': {templateUrl: '/states/partials/auth/signup.html'}
    }
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('auth-required');
    }
  });
}
AuthCatcher.$inject = ['$rootScope', '$state'];

angular
  .module('MastersApp', ['ui.router', 'firebase'])
  .config(MainRouter)
  .run(AuthCatcher);
