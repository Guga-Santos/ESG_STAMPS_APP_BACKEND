import mongoose from 'mongoose';

const MONGO_DB_URL = process.env.MONGODB_URI;

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;