/**
 * HttpException class
 * @author Kenneth Sumang
 */
export default class HttpException extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}