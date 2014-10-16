var app = angular.module("TextSupport")

app.service("supportService", function($http){
	this.sendText = function(numObj){
		return $http({
			method: 'POST',
			url: 'http://localhost:9696/support/messages',
			data: numObj
		}).then(function(res){
			return res;
		});
	}
})