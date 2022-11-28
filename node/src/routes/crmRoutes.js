import { addNewContact } from '../controller/crmController'

const routes = (app) => {
    app.route('/contact')
        // routes for get and post method 
        .get((req, res) => {

            //middelware
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();

        }, (req, res, next) => {

            res.send('GET request sucessful!')
        })


        .post(addNewContact);

    // routes for update and delete method 
    app.route('/contact/:contactId')
        .put((req, res) =>
            res.send('PUT request sucessful!')
        )

        .delete((req, res) =>
            res.send('DELETE request sucessful!')
        )
}

export default routes;


