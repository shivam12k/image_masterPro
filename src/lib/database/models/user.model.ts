import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, "Clerk id is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  photo: {
    type: String,
    required: [true, "photo is required"],
  },
  firstname: {
    type: String,
  },
  lastName: {
    type: String,
  },
  plainId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);
export default User;