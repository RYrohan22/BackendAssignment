const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceVolumeSchema = new Schema({
  priceUsd: String,
  volume: {
    h24: Number,
    h6: Number,
    h1: Number,
    m5: Number
  }
});

module.exports = mongoose.model('PriceVolume', PriceVolumeSchema);
