import mongoose from "mongoose";

export const AutoIncrement = require('mongoose-sequence')(mongoose)

export const connection = mongoose.connect("mongodb://localhost/practicaMongo",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
)
.then(db=>console.log('db is connected'))
.catch(error => console.log(error))

