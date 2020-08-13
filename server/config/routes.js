var path = require('path');
module.exports = function(app) {
    app.all('*', (req, res) => {
        res.sendFile(path.resolve
        ('public/dist/index.html'));
    });
}