const mongoose = require('mongoose');
const config = require('./config');
const PriceVolume = require('./models/schema');


mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB Connected');

    const dataset = {
        "schemaVersion": "1.0.0",
        "pairs": [
          {
            "priceUsd": "0.004514",
            "volume": {
              "h24": 270876.69,
              "h6": 61054.38,
              "h1": 768.6,
              "m5": 6.46
            }
          },
          {
            "priceUsd": "0.005298",
            "volume": {
              "h24": 761.01,
              "h6": 312.43,
              "h1": 5.27,
              "m5": 0
            }
          }
        ]
      };

    
    for (const pairData of dataset.pairs) {
        const pair = new PriceVolume(pairData);
        try {
          await pair.save();
          console.log(`Pair inserted successfully`);
        } catch (error) {
          console.error(`Error inserting pair: ${error.message}`);
        }
      }
  
      mongoose.connection.close();
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

  