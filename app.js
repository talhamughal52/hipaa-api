require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");

const patientRoutes = require("./routes/patients");

const app = express();
app.use(helmet());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
