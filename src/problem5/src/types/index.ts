export class AppException extends Error {
  statusCode: number;
  extraData?: object;

  constructor(data: Partial<AppException>) {
    super(data.message);
    Object.setPrototypeOf(this, AppException.prototype);
    this.name = Error.name;
    this.statusCode = data?.statusCode || 500;
    this.extraData = data?.extraData;
    Error.captureStackTrace(this);
  }
}
