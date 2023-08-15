import mongoose from 'mongoose';

const typeForMakingConsumedFoodsRequired = ['AB', 'AL', 'AD']

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
    consumedFoods: {
      type: [String],
      required: function () {
        return typeForMakingConsumedFoodsRequired.includes(this.type)
      }
    },
    description: {
      type: String,
      max: 100
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