
'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');
module.exports.getAllLoot = () => {
    return new Promise ((resolve,reject)=>{
        db.all(`SELECT * 
                FROM kids`,
            (err,data)=>{
                if(err){
                    console.log('dagnabbit', err.toString());
                }
                console.log('kids', data);
                resolve(data);
                
            })
    })
}