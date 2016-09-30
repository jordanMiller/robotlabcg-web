'use strict';

var app = angular.module('app',[]);

app.controller('LandingPageCtrl', ['$scope',function ($scope){
	$scope.email;
	$scope.showForm = true;

	$scope.signup = function(){
		alert($scope.email);
		$scope.showForm = false;	
	};

}]);