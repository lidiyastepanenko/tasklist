'use strict';
angular.module('todoApp', [])
.controller('todoController', ["$scope", function($scope){
   
	$scope.setDate= new Date ();
	$scope.taskList = [];
        if (localStorage.object){
            $scope.taskList = JSON.parse(localStorage.getItem("object"));
            }
	$scope.addTask = function(){
		$scope.taskList.push({description: $scope.newTask, date: $scope.setDate, done : false})
		return $scope.newTask ="", $scope.setDate = new Date ();
	};	
	$scope.remain = function () {
        var count = $scope.taskList.length;
        angular.forEach($scope.taskList, function(task) {
            var sObj = JSON.stringify($scope.taskList);
            localStorage.setItem("object", sObj);
            count -= task.done;
            // console.log($scope.taskList);
        });
        return count;
    };
    $scope.clearTask = function(task){
        return $scope.newTask ="", $scope.setDate = new Date ();
    }
	$scope.deleteTask = function(index){
		$scope.taskList.splice(this.$index, 1);   
	};
	$scope.editTask = function(task) {
		$scope.activeTask = task;
        console.log($scope.activeTask);
        console.log(task);
	}; 
	$scope.updateTask = function(task) { 
        $scope.activeTask = task.description; 
	};
    $scope.modelvalue = false;
    $scope.changeModelValue = function() {
        $scope.modelvalue = !$scope.modelvalue;
    }
    $scope.importantlvalue = false;
    $scope.changeImportantValue = function() {
        $scope.importantlvalue = !$scope.importantlvalue;
    }
}]);
