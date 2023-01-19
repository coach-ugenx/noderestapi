'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan", res)
};

// menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa',
        function (error, rows, fileds) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

// menampilkan data mahasiswa berdasarkan id
exports.tampilMahasiswaId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fileds) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};