const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

let contacts = []

app.get("/contacts", (req,res)=>{
    res.json(contacts)
})

app.post("/contacts",(req,res)=>{
    contacts.push(req.body)
    res.json({message:"Contact added"})
})

app.delete("/contacts/:id",(req,res)=>{
    contacts.splice(req.params.id,1)
    res.json({message:"Deleted"})
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})
