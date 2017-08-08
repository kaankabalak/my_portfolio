var notes = require('../controllers/notes.js');
// require path for getting the models path
var path = require('path');
module.exports = function(app) {
    app.get('/notes', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        notes.find_all(req,res);
    })

    app.post('/notes', function(req, res) {
        notes.create(req,res);
    })

    app.all('*', (req, res) => {
        res.sendFile(path.resolve
        ('public/dist/index.html'));
    });
}