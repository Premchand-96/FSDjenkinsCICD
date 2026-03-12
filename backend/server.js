const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "prem123",
database: "contactdb"
});

db.connect(err => {
if(err) {
console.log("DB Error",err);
}
else{
console.log("Database Connected");
}
});

app.get("/contacts",(req,res)=>{
db.query("SELECT * FROM contacts",(err,result)=>{
res.send(result);
});
});

app.post("/contacts",(req,res)=>{
const {name,email,phone}=req.body;

db.query(
"INSERT INTO contacts(name,email,phone) VALUES (?,?,?)",
[name,email,phone],
(err,result)=>{
res.send("Contact Added");
});
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});
