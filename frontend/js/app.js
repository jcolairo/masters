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
  .state('croissantMenu', {
    url: '/croissantMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@croissantMenu': {templateUrl: '/states/partials/menu/breakfastMenu/croissantMenu.html'}
    }
  })
  .state('muffinsMenu', {
    url: '/muffinsMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@muffinsMenu': {templateUrl: '/states/partials/menu/breakfastMenu/muffinsMenu.html'}
    }
  })
  .state('danishesMenu', {
    url: '/danishesMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@danishesMenu': {templateUrl: '/states/partials/menu/breakfastMenu/danishesMenu.html'}
    }
  })
  .state('donutsMenu', {
    url: '/donutsMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@donutsMenu': {templateUrl: '/states/partials/menu/breakfastMenu/donutsMenu.html'}
    }
  })
  .state('breakfastBagelsMenu', {
    url: '/breakfastBagelsMenu',
    views: {
      '': {templateUrl: '/states/template.html'},
      'main@breakfastBagelsMenu': {templateUrl: '/states/partials/menu/breakfastMenu/breakfastBagelsMenu.html'}
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
  });

  $urlRouterProvider.otherwise('/');
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('MastersApp', ['ui.router'])
  .config(MainRouter);
