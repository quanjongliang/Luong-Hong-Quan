import { Response } from "express";
import { AppException } from "../types";

function responseData<T>(response: Response, data: T, meta: object = {}) {
  if (response.headersSent) {
    return;
  }
  return response.status(200).send({
    data,
    meta,
  });
}

function throwError(errorMessage: string, statusCode = 500) {
  const exception = new AppException({ message: errorMessage, statusCode });
  throw exception;
}

export default {
  responseData,
  throwError,
};
