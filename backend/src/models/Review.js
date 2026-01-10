const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    language : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    review :{
        type : Object,
        required : true
    }
}, {timestamps : true}
);

module.exports = mongoose.model("Review",reviewSchema);