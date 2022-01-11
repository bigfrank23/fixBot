const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    car_name:{
      type: String,
      required: true,
      unique: true

    },
    engine_temperature: {
      type: Number,
      required: true,
    },
    car_speed: {
      type: Number,
      required: true,
    },
    car_longitude: {
      type: Number,
      required: true,
    },
    car_latitude: {
      type: Number,
      required: true,
    },
    fuel_consumption_rate: {
      type: Number,
      required: true,
    },
    performance_status: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("data", DataSchema);
