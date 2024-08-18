import { Request, Response, NextFunction } from "express";
import { createSizes, getAllSizes } from "../service/sizeService";

export const createSizesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, additional_price } = req.body;
    const size = await createSizes(name, additional_price);
    return res.status(201).json(size);
  } catch (error) {
    next(error);
  }
};

export const getAllSizesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSizes = await getAllSizes();
    res.status(200).json(allSizes);
  } catch (error) {
    next(error);
  }
};
