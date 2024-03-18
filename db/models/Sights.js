import mongoose from "mongoose";

const { Schema } = mongoose;

const SightSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Sight = mongoose.models.Sight || mongoose.model("Sight", SightSchema);

export default Sight;
