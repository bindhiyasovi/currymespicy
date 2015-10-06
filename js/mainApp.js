
/*var cmsApp = angular.module('cmsApp', ['ngRoute', 'cmsController']);*/
//alert("hi there!");
var mainApp = angular.module('cmsApp',['ngRoute','ngSanitize','angularUtils.directives.dirPagination']);

mainApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/home.html', 
		controller:'mainController'})
	.when('/about', {
		templateUrl : 'partials/about.html', 
		controller:'aboutController'})
	.when('/contact', {
		templateUrl : 'partials/contact.html', 
		controller:'contactController'})
	.otherwise('/', {
		templateUrl : 'partials/home.html', 
		controller:'mainController'});
});


/*
cmsApp.controller('cmsController', function($scope){
	$scope.message = "Hello Home";
	alert("")
});

cmsApp.controller('aboutController', function($scope){
	$scope.message = "Visting About Page!";
});

cmsApp.controller('contactController', function($scope){
	$scope.message = "Contact Us!";
});
*/