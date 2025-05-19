"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");
  app.route("/").get(jsonku.index);
  app.route("/GET").get(jsonku.tampilData);
  app.route("/GET/:id").get(jsonku.tampilDataID);
  app.route("/POST").post(jsonku.tambahData);
  app.route("/PUT").put(jsonku.editData);
  app.route("/DELETE").delete(jsonku.deleteData);
};
