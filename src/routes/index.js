const usersRouter = require('./users.route');

function router(app) {

    app.use('/users', usersRouter);

}; 

module.exports = router;