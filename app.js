const express=require("express");
const bodyParser=require("body-parser");
let app=express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

var items=[];

app.get("/",function(req,res){
    const date=new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = date.toLocaleDateString("en-US",options);

    res.render("list",{ejsDay : day, ejsItems : items});

});

app.post("/", function(req,res){
    items.push( req.body.item );

    res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is up..!!");
});