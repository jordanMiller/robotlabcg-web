'use strict';

var app = angular.module('app',[]);

app.controller('LandingPageCtrl', ['$scope','$http', '$log', function ($scope,$http,$log){
	$scope.email;
	$scope.showForm = true;
	$scope.formError = false;

	$scope.signup = function(){
		alert($scope.email);
		var data = {'email' : $scope.email};
			
		$http({
			method : 'POST',
			url : 'scripts/action2.php',
			data : $.param(data),
			headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
		}).success(function(data){
			$log.debug(data);
			if (data.success){
				$scope.showForm = false;
			} else {
				$scope.formError = true;
				$log.error(data.message);
			}
		});

	};

}]);