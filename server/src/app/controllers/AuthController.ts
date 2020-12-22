import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import UserSchema from "../schemas/User";
import jwt from "jsonwebtoken";

class AuthController {
  async autenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email }).select("+password");

    if (!user) return res.status(401).json({ message: "user not found" });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return res.status(403).json({ message: "access denied" });

    const SECRET_KEY: string = process.env.JWT_SECRET_KEY as string;
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });

    return res.json({
      user: {
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      },
      token,
    });
  }

  async register(req: Request, res: Response) {
    try {
      const { email, username } = req.body;

      const isUsername = await UserSchema.exists({ username });

      const isEmail = await UserSchema.exists({ email });

      if (isEmail || isUsername) {
        return res
          .status(409)
          .json({ message: "username or email already exists" });
      }

      const user = await UserSchema.create(req.body);

      return res.json({
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new AuthController();
