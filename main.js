(function() {
	'use strict';
	var mdash = 'Aahho - '
	//Create a app level module which has dependencies on controllers and components
	var aahhoWeb =
		angular.module('ngSeedApp', [
			'ui.router',
			'ngSeedApp.controllers',
			'simple-slideshow',
			'firebase'
		]);

	aahhoWeb
		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/');


				$stateProvider.state("home", {
					url: "/",
					controller: 'homeController',
					templateUrl: 'views/home.html',
					data : { pageTitle: mdash + 'Home' }
				}).state("work", {
					url: "/work",
					data : { pageTitle: mdash + 'Work' },
					controller: 'workController',
					templateUrl: 'views/work.html'
				}).state("services", {
					url: "/services",
					data : { pageTitle: mdash + 'Services' },
					controller: 'servicesController',
					templateUrl: 'views/services.html'
				}).state("products", {
					url: "/products",
					data : { pageTitle: mdash + 'Product' },
					controller: 'productsController',
					templateUrl: 'views/products.html'
				}).state("about", {
					data : { pageTitle: mdash + 'About' },
					url: "/about",
					controller: 'aboutController',
					templateUrl: 'views/about.html'
				}).state("contact", {
					data : { pageTitle: mdash + 'Contact' },
					url: "/contact",
					controller: 'contactController',
					templateUrl: 'views/contact.html'
				});
			}
		])
		.run(['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {

				//Add references to $state and $stateParams to the $rootScope
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;

				$rootScope.$on('$stateChangeStart', function (event) {
					console.log('state change started');
					var sidebar = $('.sidebar');
					var em = sidebar.find('#sidebar-btn');
					if(sidebar.hasClass('sidebar-sm')) {
						sidebar.removeClass('sidebar-sm');
						em.removeClass('fa-times');
						em.addClass('fa-bars');
					}
				});

				// $rootScope.$on('$stateChangeSuccess', function (event) {
				// 	console.log('state change success');
				// 	var sidebar = $('.sidebar');
				// 	if(sidebar.hasClass('sidebar-sm')) {
				// 		sidebar.removeClass('sidebar-sm');
				// 	}
				// });

				$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
					$rootScope.title = current.$$route.title;
				});

				$rootScope.toggleSidebar = function ($event) {
					// console.log($event);
					var sidebar = $('.sidebar');
					var em = sidebar.find('#sidebar-btn');
					console.log(em);
					if(sidebar.hasClass('sidebar-sm')) {
						sidebar.removeClass('sidebar-sm');
						em.removeClass('fa-times');
						em.addClass('fa-bars');
					} else {
						sidebar.addClass('sidebar-sm');
						em.removeClass('fa-bars');
						em.addClass('fa-times');
					}
				};
			}
		]);
}());