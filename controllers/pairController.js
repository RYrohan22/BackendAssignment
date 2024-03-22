const Pair = require('../models/schema');

exports.getPriceData = async (req, res, next) => {
  try {
    
    const priceData = await Pair.find({}, 'priceUsd');
    res.json(priceData);
  } catch (error) {
    next(error); 
  }
};

exports.getVolumeData = async (req, res, next) => {
  try {
    
    const volumeData = await Pair.find({}, 'volume');
    res.json(volumeData);
  } catch (error) {
    next(error); 
  }
};
