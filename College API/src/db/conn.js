const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/amaar-college").then(() => {
    console.log("db connection done");
}).catch((e) => {
    console.log("db connection not done")
});