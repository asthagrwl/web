var http = require("http");
var dat=new Date();
var n=3000;

function display() {
    console.log("Funtion Executed after n seconds")
}
function setTimeoutSync(display,n) {
    setTimeout(display,n);
}

var n = 5000;

setTimeoutSync(display,n);


function square(item){
        return item * item;
    }

function foreach(arr,square) {
    i=0;
    while (i < arr.length){
        console.log(square(arr[i]));
        i++;
    }
}

var arr = [1,2,3]
foreach(arr,square);


function map(arr,square) {
    var map_arr = [];
    var i = 0;
    while (i < arr.length){
        var sq = square(arr[i]);
        map_arr[i] = sq;
        i++;
    }
    return map_arr;
}

var arr = [1,2,3];
var res = map(arr,square);
console.log(res);


var app=http.createServer(setTimeOutSync());
app.listen(3000,127.0.0.1);