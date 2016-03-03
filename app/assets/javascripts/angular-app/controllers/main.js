angular
	.module('app')
	.controller('MainCtrl', ['$scope','Todo',  function ($scope, Todo) {
		$scope.todos = Todo.query();

		$scope.$on('$routeChangeSuccess', function() {
			var status = $scope.status = $routeParams.status || '';

			$scope.statusFilter = (status === 'active') ? 
			{ completed: false} : (status === 'completed') ? 
			{ completed: true} : null;
		});
		
	}])