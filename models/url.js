import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode : String,
    longUrl : String,
})

export const urlModel = mongoose.model("shortUrl", urlSchema);