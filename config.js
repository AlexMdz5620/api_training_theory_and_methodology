import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async  () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connceted: ${conn.connection.host}`);
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
};

export { connect };