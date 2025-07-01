 const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

  productname: { type: String, required: true },
  packagedetails: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
 duration: { type: String, required: true },
 uploadimage: { type: [String], required: true },
  location: { type: String, required: true },
 
});

const addpackage = new mongoose.model("addpackage", packageSchema);

module.exports = addpackage;
