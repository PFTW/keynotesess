angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('keynote', {
        url: '',
        templateUrl: 'views/keynote.html',
        controller: 'KeynoteController'
      });

    $urlRouterProvider.otherwise('keynote');
  }]);

