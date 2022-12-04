const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    { 
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required: false,
        },
        avatar: {
            type: String,
            required: false,
        },
        dateCreated: {
            type: String,
            required: true,
            default: Date.now 
        },
        subscribe: {
            type: Boolean,
            required: false,
        },
        }
)

//Model
const UserModel = mongoose.model('users', UserSchema);

//ExportModel
module.exports = UserModel;