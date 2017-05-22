function PortfolioController() {
  var controller = this;

  controller.portfolioData = [
    {
      title: 'Connect 4',
      titleName: 'portfolio-connect4',
      img: 'connect4',
      desc: 'Connect 4 desciption Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://jcolairo-sg-project-1.herokuapp.com/'
    },
    {
      title: 'Find your favourite Movie',
      titleName: 'portfolio-movies',
      img: 'movies.png',
      desc: 'movies users desciption Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://users-movie-mvc.herokuapp.com/'
    },
    {
      title: 'Find crime in your area',
      titleName: 'portfolio-police',
      img: 'police.png',
      desc: 'police api desciption Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://james-sg-project-3.herokuapp.com/'
    }
  ];
}

angular
  .module('PortfolioApp')
  .controller('PortfolioController', PortfolioController);
