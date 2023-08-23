import mongoose from 'mongoose';

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the food you consumed!'],
      maxLength: [20, 'Food name is exceeding the max character(20)'],
      unique: true,
      lowercase: true,
    }
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model('Food', foodSchema);

export default Food;
