import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import GlucoReading from "../models/glucoReadingModel.js";
import { AppError, getFormattedTimeStamp } from "../utils/index.js";

// description  Adding glucose reading data
// route        POST /api/v1/glucoseReading
// access       Private
const createReading = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { type, reading, consumedFoods, description, isExercised } = req.body;

    //TODO: add logic to add only one value (BB, AB, BL, AL, BD, AD) for the day;

    const newReading = await GlucoReading.create({
      type,
      reading,
      consumedFoods,
      description,
      isExercised,
      userId: user._id
    });

    res.status(201).json({
      data: {
        _id: newReading._id,
        reading: newReading.reading,
        consumedFoods: newReading.consumedFoods,
        description: newReading.description,
        isExercised: newReading.isExercised,
        userId: newReading.userId,
        createdAt: getFormattedTimeStamp(newReading.createdAt)
      }
    })

  } else {
    throw new AppError('User not found', 404);
  }
});

// description  Get all the glucose readings of a loggedIn user.
// route        GET /api/v1/glucoseReading
// access       Private
const getAllReadings = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const readings = await GlucoReading.find({ userId: user._id });
    res.status(200).json({
      data: {
        ...readings
      }
    });
  } else {
    throw new AppError('User not found', 404);
  }
});

export {
  createReading,
  getAllReadings
}