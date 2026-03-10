const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ----------------- MongoDB Connection ----------------- */

mongoose.connect("mongodb://127.0.0.1:27017/med_project")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err.message));

/* ----------------- User Schema ----------------- */

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

/* ----------------- Medicine Schema ----------------- */

const MedicineSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    time: String
});

const Medicine = mongoose.model("Medicine", MedicineSchema);

/* ----------------- Register User ----------------- */

app.post("/register", async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.json({ message: "User already exists" });
    }

    const newUser = new User({
        username,
        password
    });

    await newUser.save();

    res.json({ message: "User registered successfully" });

});

/* ----------------- Login ----------------- */

app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ message: "All fields required" });
    }

    const user = await User.findOne({ username, password });

    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.json({ message: "Invalid username or password" });
    }

});

/* ----------------- Add Medicine ----------------- */

app.post("/addMedicine", async (req, res) => {

    const medicine = new Medicine({
        name: req.body.name,
        dosage: req.body.dosage,
        time: req.body.time
    });

    await medicine.save();

    res.json({ message: "Medicine added successfully" });

});

/* ----------------- Get Medicines ----------------- */

app.get("/getMedicines", async (req, res) => {

    const medicines = await Medicine.find();

    res.json(medicines);

});

/* ----------------- Start Server ----------------- */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});


