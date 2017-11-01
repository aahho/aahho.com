(function() {
	'use strict';

	var aahhoControllers = angular.module('ngSeedApp.controllers');

	
	aahhoControllers.controller('homeController', [
			'$scope',
			function($scope) {
				$scope.title = "Welcome";
			}
	]);

	aahhoControllers.controller('workController', [
		'$scope',
		function($scope) {

			$scope.slides = [
				{name: 'Wedding Site for US', url: './img/work/3knots.jpg'},
				{name: 'Corporate Game for Boston Consulting Group (BCG)', url: './img/work/AnurakshanBCG.png'},
				{name: 'CMS for upcoming blog', url: './img/work/iamstarting.png'},
				{name: 'inquy - save once, access everywhere Unfollow', url: './img/work/inquy.png'},
				{name: 'Mobile community', url: './img/work/MobilityNinja.png'},
				{name: 'Prototyping productivity', url: './img/work/nevermissit.png'},
				{name: 'Mobile device UI', url: './img/work/seagate.png'},
				{name: 'Conference landing page', url: './img/work/wwb.png'},
				

				
			]



			$scope.title = "Welcome";
		}
]);

aahhoControllers.controller('servicesController', [
	'$scope',
	function($scope) {
		$scope.title = "Welcome";
	}
]);
aahhoControllers.controller('productsController', [
	'$scope',
	function($scope) {
		$scope.title = "Welcome";
	}
]);
aahhoControllers.controller('aboutController', [
	'$scope',
	function($scope) {
		$scope.title = "Welcome";
	}
]);

aahhoControllers.controller('contactController', [
	'$scope','$firebaseArray',
	function($scope, $firebaseArray) {
		$scope.title = "Welcome";


		$scope.submitContact = function(contact) {
			var database = firebase.database();
    		var ref = firebase.database().ref('/contacts');
     		var object =  {
            'contactName' : contact.name,
            'contactEmail' : contact.email,
            'contactPhone' : contact.phone
        }

			 const promise = ref.push(object);
			  promise.catch(e => console.log(e.message));
          	  promise.then(function() {
                console.log("done");
                
            })
		}
	}
]);


}());

