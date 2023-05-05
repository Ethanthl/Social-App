import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
export const signin = async (req, res) => {
  const secret = process.env.secret;
  const { name, password } = req.body;
  try {
    const existingUser = await User.findOne({ name });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    if (users) {
      res.status(200).json(accounts);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const newUser = async (req, res) => {
  const { name, phone, password } = req.body;
  const exisintUser = await User.findOne({ name });
  //check if user exist
  if (exisintUser) {
    console.log("User already exist");
    return res.status(400).json({ message: "User already exist" });
  }
  //replace password with hashed
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = { name: name, phone: phone, password: hashedPassword }
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json({ newUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
