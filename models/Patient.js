const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateOfBirth: Date,
  medicalHistory: String,
});

// Encrypt PHI fields
const encKey = process.env.ENCRYPTION_KEY;
const sigKey = process.env.SIGNING_KEY;
patientSchema.plugin(encrypt, {
  encryptionKey: encKey,
  signingKey: sigKey,
});

module.exports = mongoose.model("Patient", patientSchema);
