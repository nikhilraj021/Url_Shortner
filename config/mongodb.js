import mongoose from "mongoose";

export const connectDB = async () => {
  // try {
  //     await mongoose.connect(process.env.MONGODB_URL)
  //     console.log("DB Connected!!")
  // } catch (error) {
  //     console.log("Connection Failed", err)
  // }

  // OR

  await mongoose
    .connect(process.env.MONGODB_URl)
    .then(() => {
      console.log("DB Connected!!");
    })
    .catch((err) => {
      console.log("Connection Failed", err);
    });
};
