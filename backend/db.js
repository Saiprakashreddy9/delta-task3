const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://saiprakash:sai123@cluster0.l8ppw17.mongodb.net/dtunes').then(() => console.log('MongoDB connected with task-3 collection'))
    .catch(err => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
});



// Create Models
const User = mongoose.model('User', userSchema);


// Export Models
module.exports = { User }


