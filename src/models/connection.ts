import mongoose from 'mongoose';

const MONGO_DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/Selos';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGODB_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;