import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import GlucoReading from "../models/glucoReadingModel.js";
import { getFormattedTimeStamp } from "../utils/index.js";

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
      _id: newReading._id,
      reading: newReading.reading,
      consumedFoods: newReading.consumedFoods,
      description: newReading.description,
      isExercised: newReading.isExercised,
      userId: newReading.userId,
      createdAt: getFormattedTimeStamp(newReading.createdAt)
    })

  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  createReading
}