const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    time: String
});

module.exports = mongoose.model("Medicine", MedicineSchema);
