const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./makeTable.js');

(function createDB() {

    new sqlite3.Database('lootbag.sqlite',() => {
        createTables()
        .then( (data) => {
            console.log('kids ids', data);
        })
        .catch ( (err) => {
            console.log('oops', err);
        });
    });
})();