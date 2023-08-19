import mongoose from 'mongoose';

const typeForMakingConsumedFoodsRequired = ['AB', 'AL', 'AD'];
const typeForMakingIsMedsTakenRequired = ['AB', 'AD'];

const glucoReadingSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['BB', 'AB', 'BL', 'AL', 'BD', 'AD'],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reading: {
      type: Number,
      required: true,
    },
    isMedsTaken: {
      type: Boolean,
      required: function () {
        if (typeForMakingIsMedsTakenRequired.includes(this.type)) {
          return [true, 'Have you taken your pills yet?']
        } else {
          return false
        }
      }
    },
    // TODO: will be looked at this later
    // consumedFoods: {
    //   type: [String],
    //   validate: {
    //     validator: function (consumedFoodsVal) {
    //       if (typeForMakingConsumedFoodsRequired.includes(this.type)) {
    //         if (consumedFoodsVal && consumedFoodsVal.length > 0) {
    //           return true
    //         } else {
    //           return false
    //         }
    //       } else {
    //         return true
    //       }
    //     },
    //     message: 'Please provide the food consumed!'
    //   }
    // },
    description: {
      type: String,
      maxLength: [100, "Description is longer than the max length(100)"],
    },
    isExercised: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

const GlucoReading = mongoose.model('GlucoReading', glucoReadingSchema);

export default GlucoReading;
