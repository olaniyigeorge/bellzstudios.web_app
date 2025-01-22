import mongoose from 'mongoose';

let isConnected = false; // Track the connection

export const connectToDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined.');
    }

    console.log("Mongoose connecting to...\n", process.env.MONGODB_URI);
    mongoose.set('strictQuery', true);

    if (isConnected) {
      console.log('MongoDB is already connected');
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bellzstudio", //  share_prompt
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
