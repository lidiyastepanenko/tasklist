angular.module("todoApp")
.filter("showToday", function () {
    return function (value, boolian) {
        // console.log(value);
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) { 
            var now = new Date();
            console.log(now);
            today = now.getDate();
            console.log(today);
            taskDate = new Date(task.date);
            console.log(taskDate);
            taskDay = taskDate.getDate();
            console.log(taskDay);
            if(taskDay == today) result.push(task);
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
            console.log(now);
            today = now.getDate();
            console.log(today);
            taskDate = task.date;
            taskDay = new Date(taskDate);
            console.log(taskDay);
            ddd = taskDay.setDate(taskDay.getDate());
            console.log(ddd);
            week = now.setDate(now.getDate() + 7)
            console.log(week);
            if(ddd <= week) result.push(task);
        })
        console.log(result);
        return result; 
    };
    })


.filter("showDone", function () {
    return function (value, boolian) {
        // console.log(value);
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) {            
            if(task.done === true) result.push(task);
            console.log(task);
            // console.log(task.date);
            // console.log(task.description);
        })
        console.log(result);
        return result; 
    };
    })
