const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/med_project")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err.message));

const MedicineSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    time: String
});

const Medicine = mongoose.model("Medicine", MedicineSchema);

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ message: "All fields required" });
    }
    res.json({ message: "Login successful" });
});

app.post("/addMedicine", async (req, res) => {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.json({ message: "Medicine added successfully" });
});

app.get("/getMedicines", async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});


