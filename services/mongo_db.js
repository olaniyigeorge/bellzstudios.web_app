import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  console.log("Mongoose connecting to... \n", process.env.MONGODB_URI)
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt", // bellzstudio
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}