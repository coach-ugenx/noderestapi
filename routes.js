'use strict';

module.exports = function (app) {
    let jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaMahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilMahasiswaId);
}