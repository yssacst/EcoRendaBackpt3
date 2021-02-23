const mysql = require('mysql')
const conn = mysql.createConnection({
   /* host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecorenda2'*/
    /*host : '162.241.203.62',
    user : 'gustav31_adm_ecorenda',
    password : '',
    database : 'gustav31_ecorenda2'*/
    host : 'bmqafcjabntoriozlsak-mysql.services.clever-cloud.com',
    user : 'u4hj65p0ncmscjnv',
    password : 'QLcmd14mDVsrTWTGGfIc',
    database : 'bmqafcjabntoriozlsak'
    
    
})

module.exports = conn
