import { NextFunction, Request, Response } from 'express';
export const pageError = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'This name router is not create',
  });
};

export const golobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({
    success: false,
    message: (err as Error).message || 'Something went worng',
  });
};
