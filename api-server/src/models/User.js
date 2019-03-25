import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";
import AuthService from "../services/AuthService";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    token: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

mongoose.set("useCreateIndex", true);
UserSchema.plugin(uniqueValidator);

const onSaveUser = async function onSaveUser(next) {
  try {
    const user = this;

    if (!user.isModified("password")) {
      next();
    }

    user.password = await AuthService.hashPassword(user.password);

    next();
  } catch (err) {
    next(err);
  }
};
UserSchema.pre("save", onSaveUser);

export default mongoose.model("User", UserSchema);
