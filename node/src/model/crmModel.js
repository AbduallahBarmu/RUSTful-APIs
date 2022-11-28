import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your First name '
    },
    lastName: {
        type: String,
        required: 'Enter your Last Name '

    },
    email: {
        type: String,
        required: 'Enter your Email '
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})