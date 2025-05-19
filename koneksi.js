var mysql = require('mysql')

//koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_datarestapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('mysql terkoneksi')
});

module.exports = conn;