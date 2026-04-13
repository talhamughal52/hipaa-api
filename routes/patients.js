const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Create a new patient (PHI)
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all patients (PHI)
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;