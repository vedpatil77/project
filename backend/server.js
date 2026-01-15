const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/med_project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Medicine = require("./models/Medicine");

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    res.json({ message: "Login successful" });
});

app.post("/addMedicine", async (req, res) => {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.json({ message: "Medicine added" });
});

app.get("/getMedicines", async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
