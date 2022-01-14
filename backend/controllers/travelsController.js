const Travel = require("../models/travelModel");

exports.getAllData = (req, res, next) => {
  const travelsData = Travel.fetchAll();

  res.send(travelsData);
};
