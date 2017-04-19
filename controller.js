'use strict';
angular.module('todoApp', [])
.controller('todoController', ["$scope", "$filter", function($scope, $filter){
    $scope.pendingCount = 3;   
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
        console.log(this.$index);
		$scope.taskList.splice(this.$index, 1);   
	};
	$scope.editTask = function(task) {
		$scope.activeTask = task;
        // console.log($scope.activeTask);
        console.log(task);
	}; 
	$scope.updateTask = function(task) { 
        console.log(task);
        $scope.activeTask = task.description; 
	};
    
    $scope.importantlvalue = false;

    $scope.setDone = function(){
        $scope.importantlvalue = !$scope.importantlvalue;
    };
    $scope.clearCompleted = function(){
        console.log($scope.taskList);
        $scope.taskList = $filter('filter')($scope.taskList, {done: false});
        return $scope.importantlvalue = !$scope.importantlvalue;
    };

    $scope.dayvalue = false;
    $scope.setDay = function(){
        $scope.importantlvalue = false;
        $scope.weekvalue = false;
        $scope.dayvalue = !$scope.dayvalue;
        // console.log(dayvalue);
    };

    $scope.weekvalue = false;
    $scope.setWeek = function(){
        $scope.importantlvalue = false;
        $scope.dayvalue = false;
        $scope.weekvalue = !$scope.weekvalue;
    }
    $scope.showAll = function(){
        $scope.importantlvalue = false;
        $scope.dayvalue = false;
        $scope.weekvalue = false;
    }
}]);
