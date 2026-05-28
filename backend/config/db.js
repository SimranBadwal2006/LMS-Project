const mongoose = require("mongoose")            
require("dotenv").configs()          
const connection =mongoose.connect(process.env.MONGO_URL)
//export code
module.exports={
    connection
}