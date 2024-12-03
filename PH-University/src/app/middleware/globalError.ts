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
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: (err as Error).message || 'Something went worng',
    error:err
  });
};
