angular.module("todoApp")
.filter("showToday", function () {
    return function (value, boolian) {
        // console.log(value);
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) { 
            var now = new Date();
            console.log('Текущая дата:   ' + now);
            today = now.getDate();
            console.log('Сегодня день:   ' + today);
            yesterday = now.setDate(now.getDate() - 1);
			console.log('Сегодня милисекунды:    ' + yesterday);
            taskDate = new Date(task.date);
            console.log('Дата таски:   ' + taskDate);
            taskDay = taskDate.getDate();
            console.log('День таски:    ' + taskDay);
            taskDayMs = taskDate.setDate(taskDate.getDate() );
            console.log('День таски в МС:     ' + taskDayMs);
            tomorrow = now.setDate(now.getDate() + 1);
            console.log('Завтра:    ' + tomorrow);

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
            console.log('Текущая дата:   ' + now);
            today = now.getDate();
            console.log('Сегодня день:   ' + today);
            yesterday = now.setDate(now.getDate() - 1);
			console.log('Сегодня милисекунды:    ' + yesterday);
            taskDate = new Date(task.date);
            console.log('Дата таски:   ' + taskDate);
            taskDay = taskDate.getDate();
            console.log('День таски:    ' + taskDay);
            taskDayMs = taskDate.setDate(taskDate.getDate() );
            console.log('День таски в МС:     ' + taskDayMs);
            week = now.setDate(now.getDate() + 7);
            console.log('Неделя:    ' + week);

            if(taskDayMs <= week && yesterday < taskDayMs ) result.push(task);
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
