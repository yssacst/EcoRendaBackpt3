const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecorenda2'
    /*host : '162.241.203.62',
    user : 'gustav31_adm_ecorenda',
    password : 'ecorenda2020',
    database : 'gustav31_ecorenda2'*/
})

module.exports = conn
