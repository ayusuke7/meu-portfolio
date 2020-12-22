import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: "Unauthorized Request, expected a TOKEN in Header" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const SECRET_KEY: string = process.env.JWT_SECRET_KEY as string;
    const data = jwt.verify(token, SECRET_KEY) as TokenPayload;

    req.userId = data.id;

    return next();
  } catch {
    res.sendStatus(401);
  }
}
