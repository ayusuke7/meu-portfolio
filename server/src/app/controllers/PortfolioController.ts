import { Request, Response } from "express";
import PortfolioSchema from "../schemas/Porfolio";
import UserSchema from "../schemas/User";

class PortfolioController {
  async findByUser(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const user = await UserSchema.findOne({ username }).populate("portfolio");

      if (!user) return res.status(401).json({ message: "user not found" });

      res.json(user.portfolio);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { body, userId } = req;

      const user = await UserSchema.findById(userId);

      if (!user) return res.status(404).json({ message: "user not found" });

      const portfolio = await PortfolioSchema.create({ ...body, user: userId });

      await portfolio.save();

      user.portfolio.push(portfolio);

      await user.save();

      return res.json({ portfolio });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new PortfolioController();
