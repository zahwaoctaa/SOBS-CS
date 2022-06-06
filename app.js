const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// create data / insert data
app.post('/api/login_user', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = `SELECT * FROM users WHERE email= '${data.email}' && password= '${data.password}'`;

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal login!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil login!' });
    });
});
app.post('/api/register_user', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO users SET ?';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });

});

// read data / get data
app.get('/api/category', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM category';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});
// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));