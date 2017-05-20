'use strict';
angular.module('todoApp', [])
.controller('todoController', ["$scope", "$filter", function($scope, $filter){
    $scope.pendingCount = 3;   
    $scope.setDate= new Date ();
    $scope.openMenu = false;
    $scope.taskList = [];
        if (localStorage.object){
            $scope.taskList = JSON.parse(localStorage.getItem("object"));
        }
	$scope.addTask = function(){
        if ($scope.newTask !== "") {
            $scope.taskList.push({description: $scope.newTask, date: $scope.setDate, done : false})
        }
        return $scope.newTask ="", $scope.setDate = new Date ();
    };	
    $scope.remain = function () {
        var count = $scope.taskList.length;
        angular.forEach($scope.taskList, function(task) {
            var sObj = JSON.stringify($scope.taskList);
            localStorage.setItem("object", sObj);
            count -= task.done;
        });
        return count;
    };
    $scope.clearTask = function(task){
        return $scope.newTask ="", $scope.setDate = new Date ();
    };
    $scope.deleteTask = function(index){
        $scope.taskList.splice(this.$index, 1);   
    };
    $scope.editTask = function(task) {
        $scope.activeTask = task;
	}; 
    $scope.updateTask = function(task) { 
        $scope.activeTask = task.description; 
    };
    
    $scope.importantlvalue = false;

    $scope.setDone = function(){
        $scope.importantlvalue = true;
        $scope.openMenu = false;
    };
    $scope.clearCompleted = function(){
        $scope.taskList = $filter('filter')($scope.taskList, {done: false});
            return $scope.importantlvalue = !$scope.importantlvalue;
    };

    $scope.dayvalue = false;
    $scope.setDay = function(){
        $scope.importantlvalue = false;
        $scope.weekvalue = false;
        $scope.dayvalue = true;
        $scope.openMenu = false;
    };

    $scope.weekvalue = false;
    $scope.setWeek = function(){
        $scope.importantlvalue = false;
        $scope.dayvalue = false;
        $scope.weekvalue = true;
        $scope.openMenu = false;
    }
    $scope.showAll = function(){
        $scope.importantlvalue = false;
        $scope.dayvalue = false;
        $scope.weekvalue = false;
        $scope.openMenu = false;
    }
}]);
