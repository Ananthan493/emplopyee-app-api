const mongoose = require("mongoose")
const Schema = mongoose.Schema(
{
    "name":{type:String,required:true},
    "id":{type:String,required:true},
    "department":{type:String,required:true}
}
)

let employeemodel=mongoose.model("employees",Schema);
module.exports={employeemodel}
