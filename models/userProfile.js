const mongoose = require('mongoose');

// Destructure Schema from mongoose
const {Schema} = mongoose;
// const schema = mongoose.Schema();

const userProfileSchema = new Schema({

    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model('UserProfile',userProfileSchema);
module.exports = userProfile;