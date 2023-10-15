require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');

module.exports = mongoose.connection;


// require('dotenv').config(); // Load environment variables from .env file

// const mongoose = require('mongoose');

// // MongoDB URI
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts';

// // Connect to MongoDB
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// // Successful connection
// db.on('connected', () => {
//     console.log(`Mongoose connected to ${MONGODB_URI}`);
// });

// // Error in connection
// db.on('error', (error) => {
//     console.error(`Mongoose connection error: ${error.message}`);
// });

// // Disconnected from MongoDB
// db.on('disconnected', () => {
//     console.log('Mongoose disconnected');
// });

// module.exports = db;
