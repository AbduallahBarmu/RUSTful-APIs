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


        .post((req, res) =>
            res.send('POST request sucessful!')
        )

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


