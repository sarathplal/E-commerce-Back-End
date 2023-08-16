const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {

    console.log("MongoDB Atlas COnnection Successful !!!");

}).catch((error) => {

    console.log("MongoDB Atlas connection error: ", error);

})