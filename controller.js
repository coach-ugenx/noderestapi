"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API berjalan !!!", res);
};

//menampilkan semua datA
exports.tampilData = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan data berdasarkan id
exports.tampilDataID = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mhs = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data
exports.tambahData = function (req, res) {
  var nama = req.body.nama;
  var nim = req.body.nim;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nama,nim,jurusan) VALUES(?,?,?)",
    [nama, nim, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Ditambahkan", res);
      }
    }
  );
};

//mengedit data
exports.editData = function (req, res) {
  var id = req.body.id_mhs;
  var nama = req.body.nama;
  var nim = req.body.nim;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id_mhs=?",
    [id, nama, nim, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil di Update !!!", res);
      }
    }
  );
};

//mendelete data
exports.deleteData = function (req, res) {
  var id = req.body.id_mhs;

  connection.query(
    "DELETE FROM mahasiswa WHERE id_mhs=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil di Delete !!!", res);
      }
    }
  );
};

//menampilkan nested matakuliah group
exports.tampilGroupMatkul = function (req, res) {
  connection.query(
    "SELECT mahasiswa.id_mhs, mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matkul = matakuliah.id_matkul AND krs.id_mhs = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.okeNested(rows, res);
      }
    }
  );
};
