'use strict';

var app = angular.module('app',[]);

app.controller('LandingPageCtrl', ['$scope','$http', '$log', function ($scope,$http,$log){
	$scope.email;
	$scope.showForm = true;
	$scope.formError = false;

	$scope.signup = function(){
		alert($scope.email);
		var data = {'email' : $scope.email};
		var successCallback = function(response){

		};

		$http.post('./scripts/action.php',data).success(function (data,status){
			if(data.success) {
				$scope.showForm = false;
				alert('did the thing');
			}
		}).error(function(data,status){
			$log.error('There was an error submitting the email address');	
			$scope.formError = true;
		});

	};

}]);