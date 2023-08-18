import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { AppError } from "../utils/index.js";

// description  SignIn user and set token
// route        POST /api/v1/users/signIn
// access       Public
const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if(!email){
    throw new AppError('Email is required!');
  }

  if(!password){
    throw new AppError('Password is required!');
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new AppError('Invalid email or password');
  }
});

// description  Sign up a user
// route        POST /api/v1/users
// access       Public
const signUpUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new AppError('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    confirmPassword
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new AppError('Invalid user data');
  }
});

// description  Sign out user
// route        POST /api/v1/users/signOut
// access       Public
const signOutUser = asyncHandler((req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Signed out successfully' });
});

// description  Get a user profile
// route        GET /api/v1/users/profile
// access       Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new AppError('User not found');
  }
});

// description  Update user profile
// route        PUT /api/v1/users/profile
// access       Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new AppError('User not found');
  }
});

export {
  signInUser,
  signUpUser,
  signOutUser,
  getUserProfile,
  updateUserProfile
}