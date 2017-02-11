angular.module("todoApp")
// .filter("sortDate", function () {
//             return function (task, boolian) {
//                 var now = new Date();
//                 var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//                 var tomorrow = new Date(today.valueOf() + 86400000);
//                 var result = [];
//                 if(boolian == false) return task;
//                 task.map(function(item) {
//                     var result = [];
//                     if(item.date == new Date()) result.push(item);
//                     console.log(item);
//                     console.log(item.date);
//                     console.log(tomorrow);
//                     console.log(result);
//                 })
//                 return result;
                
//         };
// });
.filter("sortDate", function () {
            return function (task, boolian) {
                var now = new Date();
                var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                var tomorrow = new Date(today.valueOf() + 86400000);
                var result = [];
                if(boolian == false) return task;
                task.map(function(item) {
                    var result = [];console.log(item.date);
                    if(item.date < tomorrow){
                        console.log(tomorrow);
                       result.push(item);
                    console.log(item);
                    console.log(tomorrow);
                    console.log(result); 
                    } 
                });
                return result;
                
        };
})
.filter("showImportant", function () {
            return function (task, boolian) {
                var result = [];
                if(boolian == false) return task;
                task.map(function(item) {
                    if(item.important === true) result.push(item);
                })
                return result;
                
        };
});