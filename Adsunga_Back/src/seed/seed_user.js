require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
async function seed() {
  console.log(process.env.MONGO_URI)
  await mongoose.connect(process.env.MONGO_URI);

  const existingUser = await User.findOne({
    email: process.env.ADMIN_EMAIL
  });

  if (existingUser) {
    console.log("User already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await User.create({
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword,
    role: "admin"
  });

  console.log("Admin created");

  process.exit();
}

seed();