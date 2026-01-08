import { Request, Response } from "express";

export const getHome = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Welcome to the Express TS Starter!",
    timestamp: new Date().toISOString(),
  });
};
