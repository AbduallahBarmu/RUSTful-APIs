import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter you First name '
    },
    lastName: {
        type: String,
        required: 'Enter you Last Name '

    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    creqted_date: {
        type: Date,
        default: Date.now
    }

})