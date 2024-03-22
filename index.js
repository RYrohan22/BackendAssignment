const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const errorHandler = require('./middleware/errorHandler');
const dataRoutes = require('./routes/dataRoutes');
const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/api/data', dataRoutes);


app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
