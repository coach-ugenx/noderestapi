let mysql = require('mysql');

// koneksi ke dbase
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'db_restapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Koneksi berhasil');
});

module.exports = conn;

