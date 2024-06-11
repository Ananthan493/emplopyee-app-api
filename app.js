const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { employeemodel } = require("./models/employee")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ananthan123:ananthan123@cluster0.4r0z6.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")



//app.get("/",(req,res)=>{
    //res.send("hello")
//})

app.post("/add",(req,res)=>{
    let input = req.body
    let employees = new employeemodel(input)
    employees.save()
    console.log(employees)
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8081,()=>{
    console.log("server started")
})