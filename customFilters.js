angular.module("todoApp")
.filter("showToday", function () {
    return function (value, boolian) {
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) { 
            var now = new Date();
            today = now.getDate();
            yesterday = now.setDate(now.getDate() - 1);
            taskDate = new Date(task.date);
            taskDay = taskDate.getDate();
            taskDayMs = taskDate.setDate(taskDate.getDate() );
            tomorrow = now.setDate(now.getDate() + 1);
                if(taskDayMs <= tomorrow && today == taskDay && yesterday < taskDayMs ) result.push(task);
        })
        console.log(result);
        return result; 
    };
})

.filter("showWeek", function () {
    return function (value, boolian) {
        // console.log(value);
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) { 
            var now = new Date();
            today = now.getDate();
            yesterday = now.setDate(now.getDate() - 1);
            taskDate = new Date(task.date);
            taskDay = taskDate.getDate();
            taskDayMs = taskDate.setDate(taskDate.getDate() );
            week = now.setDate(now.getDate() + 7);
                if(today <= taskDay && yesterday < taskDayMs && taskDayMs <= week) result.push(task);
        })
        console.log(result);
        return result; 
    };
})


.filter("showDone", function () {
    return function (value, boolian) {
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) {            
            if(task.done === true) result.push(task);
        })
        return result; 
    };
})
