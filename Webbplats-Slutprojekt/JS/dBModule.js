const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/website', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

exports.saveInput = (input) => {
    input.save(() => {
        console.log("TACK")
    })
}