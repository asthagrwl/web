var express=require('express');
var bodyParser=require('body-parser');
var app= express();

app.use("/",bodyParser.urlencoded({extended: false}));
app.use('/static', express.static(__dirname+"/assets"));

app.post("/submit",function(req,res){
    var dte=new Date(req.body.date);
    var tdte=new Date();
    var nm=req.body.name;
    var diff= parseInt((tdte-dte)/(24*1000*3600));
    console.log(diff);

    res.send("Hey" + nm +", you have lived on this planet for" + diff + "days");
});
// app.get("/submit",function(req,res){
//     res.send("get");
// });
app.listen(3000);