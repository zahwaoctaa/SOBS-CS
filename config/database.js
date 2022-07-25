const mysql = require('mysql');
const koneksi = mysql.createConnection({
    host: '34.72.29.29',
    user: 'root',
    password: 'cbd4#n`/ab-Qk+ck',
    database: 'sobs',
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;

// setingan database