import { Request, Response, NextFunction } from "express";

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.headers["x-user"];
  const key = req.headers["x-key"];

  if (user !== process.env.ADMIN_USER || key !== process.env.ADMIN_KEY) {
    return res
      .status(403)
      .json({ message: "Access denied: Invalid credentials" });
  }

  return next();
};
