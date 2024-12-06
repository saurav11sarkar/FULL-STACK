import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';
import { config } from '../config';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handlevalidationError';
import handleCastError from '../errors/handleCastError';
import handleDubleticId from '../errors/handleDubleticId';
import AppError from '../errors/appError';

// router error hendeler
export const pageError = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'This name router is not create',
  });
};

// global error Handler

export const golobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = 'Something went worng';

  let errorSources: TErrorSource = [
    {
      path: '',
      message: 'Something went worng',
    },
  ];

  if (err instanceof ZodError) {
    const simplifideError = handleZodError(err);
    statusCode = simplifideError.statusCode;
    message = simplifideError.message;
    errorSources = simplifideError?.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifideError = handleValidationError(err);
    statusCode = simplifideError?.statusCode;
    message = simplifideError?.message;
    errorSources = simplifideError?.errorSources;
  } else if (err?.name === 'CastError') {
    const simplifideError = handleCastError(err);
    statusCode = simplifideError?.statusCode;
    message = simplifideError?.message;
    errorSources = simplifideError?.errorSources;
  } else if (err?.errorResponse?.code === 11000) {
    const simplifideError = handleDubleticId(err);
    statusCode = simplifideError?.statusCode;
    message = simplifideError?.message;
    errorSources = simplifideError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    err,
    stack: config.ENV !== 'development' ? err?.stack : null,
  });
};
