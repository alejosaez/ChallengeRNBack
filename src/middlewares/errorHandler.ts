import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    if (res.headersSent) {
      return next(err);
    }

    if (err.message === "Service Error") {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.status(500).json({ error: "Unknown error" });
  }
};
