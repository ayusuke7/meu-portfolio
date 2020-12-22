import { Request, Response } from "express";
import UserSchema from "../schemas/User";

class UserController {
  async find(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const user = await UserSchema.findOne({ username });

      if (!user) {
        return res.status(401).json({ message: "user not found" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { body, userId } = req;
      const user = await UserSchema.findByIdAndUpdate(userId, body);

      if (!user) {
        return res.status(401).json({ message: "user not update" });
      }

      const { _id } = user;

      res.json({
        ...body,
        _id,
      });
    } catch (error) {
      const { codeName, keyValue } = error;
      res.status(500).json({
        error: {
          codeName,
          keyValue,
        },
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserSchema.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ message: "No item found" });
      }

      res.json({ message: `row ${user?._id} deleted` });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new UserController();
