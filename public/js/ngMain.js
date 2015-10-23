// instatiate
angular.module('bpApp', ['ngRoute', 'ngMaterial'])

// configure
angular.module('bpApp')
	.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.when('/', {
				templateUrl : './html/views/home.html',
				controller  : 'mainController as mainCtrl'
			})
		}
	]);

// mainController
angular.module('bpApp')
	.controller('mainController', ['$http', function($http){
		console.log('view loaded!');
		var mainCtrl = this;
		// this. = mainController $scope
		mainCtrl.controllerAsTest = function(){
			console.log('controllerAsTest!');
		}
	}]);