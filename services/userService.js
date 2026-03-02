import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const createUserService = async ({ email, phone, password }) => {
  // email and phone should be unique
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw new Error("email already exists");
  }

  const userPhone = await User.findOne({ phone });
  if (userPhone) {
    throw new Error("phone already exists");
  }
  // create hash password
  const hashPash = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    email,
    phone,
    password: hashPash,
  });
  console.log(user);
  return {
    message: "user cretae successfully",
    user: user,
  };
};

const userServices = {
  createUserService,
};

export default userServices;
