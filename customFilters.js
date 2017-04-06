angular.module("todoApp")
// .filter("sortDate", function () {
//             return function (task, boolian) {
//                 console.log(task);
//                 var now = new Date();
//                 var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//                 var tomorrow = new Date(today.valueOf() + 86400000);
//                 var result = [];
//                 if(boolian == false) return false;
//                 task.map(function(item) {
//                     var result = [];
//                     if(item.date == new Date()) result.push(task);
//                     // console.log(task);
//                     // console.log(task.date);
//                     // console.log(tomorrow);
//                     // console.log(result);
//                 })
//                 return result;
                
//         };
// })
// .filter("showDone", function () {
//     return function (value, boolian) {
//         console.log(value);

//         var result = [];
//         if(boolian == false) return false;
//         value.map(function(task) {
//             now = new Date;
//             day = now.valueOf();
//             console.log(now);
//             console.log(day);
//             // console.log(task.date);
//             tdate = task.date;
//             console.log(tdate);
//             tDate = tdate.valueOf();
//             console.log(tDate);
//             prev = ( day + (86400000 - 1) );
//             console.log(prev);
//             // console.log(task.date);
//             // var day = task.date;
//             // var tomorrow = day.valueOf() -1;

//             // console.log(day);
//             // console.log(tomorrow);
//             if(day -= prev) result.push(task);
//             console.log(task);
//         })
//         console.log(result);
//         return result; 
//     };
//     })
.filter("showDone", function () {
    return function (value, boolian) {
        // console.log(value);
        var result = [];
        if(boolian == false) return false;
        value.map(function(task) {            
            if(task.done === true) result.push(task);
            console.log(task);
            console.log(task.date);
            console.log(task.description);
        })
        console.log(result);
        return result; 
    };
    })
