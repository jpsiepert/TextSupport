var app = angular.module("TextSupport");

app.controller("supportCtrl", function($scope, $firebase, supportService){
	var firebaseUrl = "https://text-support.firebaseio.com/";

	$scope.tickets = $firebase(new Firebase(firebaseUrl + 'numbers/')).$asArray()
	console.log($scope.tickets)

	$scope.sendText = function(ticket){
		ticket.reply.number = ticket.$id.trim();
		supportService.sendText(ticket.reply).then(function(res){
			$scope.sent = res;
			ticket.visible = false;
			$scope.tickets.$save(ticket);
			ticket.reply = '';
		});
	}

	$scope.showForm = function(ticket){
		ticket.visible = !ticket.visible;
		$scope.sent = '';
	}

})