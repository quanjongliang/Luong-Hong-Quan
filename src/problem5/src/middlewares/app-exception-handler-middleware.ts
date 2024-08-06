import { NextFunction, Request, Response } from "express";
import { AppException } from "../types";
/**
 * Handle Error with instance AppException
 * @param {AppException} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const AppExceptionHandlerMiddleware = async (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(error);
  }
  if (error instanceof AppException) {
    res.status(error.statusCode || 500).json({
      method: req.method,
      url: req.url,
      message: error.message,
      statusCode: error.statusCode,
      extraData: error?.extraData,
      timestamp: new Date().toISOString(),
    });
  } else {
    next(error);
  }
};
