const express=require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mysql= require("mysql2");



const app=express();
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'workshopProjectDB',
  port:3306
});
//Cheking database connection
db.connect(err => {
  if (err){
    console.log(err);
  }
  console.log('database connected');
});

// get all customers data
app.get('/all',(req ,res)=>{
  let query= "SELECT * FROM products";
  db.execute(query,(err,results)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(results);
    }
  });
});
// man clothing informations
app.get('/man',(req,res)=>{
  let query="SELECT * FROM products WHERE productCategory_productCategoryId = 1 ";
  db.execute(query,(err,results)=>{
    if (err){
      console.log(err);
    }
    else{
      res.send(results);
    }
  });
});
//woman clothing informations
app.get('/woman',(req,res)=>{
  let query="SELECT * FROM products WHERE productCategory_productCategoryId = 2 ";
  db.execute(query,(err,results)=>{
    if (err){
      console.log(err)
    }
    else{
      res.send(results);
    }
  })

});
//kids clothing informations
app.get('/kids',(req,res)=>{
  let query="SELECT * FROM products WHERE productCategory_productCategoryId = 3 ";
  db.execute(query,(err,results)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(results);
    }
  })
});
//adding new customer
app.post('/newCustomer',(req,res)=>{
  let query=""

});




// listen on port 3000
app.listen(3000,()=>{
  console.log("listening on port 3000...");
});
