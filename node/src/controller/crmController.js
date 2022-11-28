import mongoose from 'mongoose';
import { ContactSchema } from '../model/crmModel';

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {

    let newContact = new Contact(req.body);

    newContact.save((err, Contact) => {
        if (err) { res.send(err) }
        res.json(contat)
    })
}