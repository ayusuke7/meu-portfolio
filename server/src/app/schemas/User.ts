import { Schema, Document, model } from "mongoose";
import { IUser } from "../interfaces/IUser";
import bcrypt from "bcryptjs";

export type UserModelInterface = IUser & Document;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    portfolio: [
      {
        type: Schema.Types.ObjectId,
        ref: "Portfolio",
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user: any = this;
  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 7);
  }
  next();
});

export default model<UserModelInterface>("User", UserSchema);
