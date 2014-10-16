var app = angular.module("TextSupport", ["firebase", "ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "/views/home.html",
		controller: "homeCtrl"
	}).when("/support", {
		templateUrl: "/views/support.html",
		controller: "supportCtrl"
	}).otherwise({
		redirectTo: "/"
	})
})
