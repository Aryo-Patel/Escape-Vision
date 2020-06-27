//general server imports
const express = require('express');
const app = express();

//imports for connecting to MongoDB
const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('MongoURI');

//routers
const teacher = require('./routes/teacher');
const auth = require('./routes/auth');

//preparing app variable
app.use(express.json());

//connecting to MongoDB
const connectTOMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('database connected');
    }
    catch (err) {
        console.log(err);
    }
}
connectTOMongo();

//connecting routers
app.use('/teacher', teacher);
app.use('/auth', auth);

//setting up PORT that can change for deployment
const PORT = process.env.PORT || 5000;
//listening to a PORT
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
})