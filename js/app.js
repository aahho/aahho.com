// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'HomeCtrl'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'HomeCtrl'});
        $routeProvider.when('/team', {templateUrl: 'partials/team.html', controller: 'HomeCtrl'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'HomeCtrl'});
        $routeProvider.when('/projects/colors',{templateUrl: 'partials/colors.html', controller: 'ColorControllers'});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
