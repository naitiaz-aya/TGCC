const mongoose = require("mongoose");

const SectorSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Sector = mongoose.model("sector", SectorSchema);
module.exports = Sector;