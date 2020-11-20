import { HttpException, ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class DataExistedFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const httpResponseObj = JSON.stringify(exception.getResponse());
    const convertedResponseObj = JSON.parse(httpResponseObj);

    const tableField = Object.keys(convertedResponseObj.error.fields)[0];
    const field = tableField.substr(tableField.indexOf(".") + 1);

    const errCode = `ERR_${field.toUpperCase()}_EXISTS`;

    let jsonRes: object = {};

    if (convertedResponseObj.customError) {
      jsonRes = convertedResponseObj.customError
    } else {
      jsonRes = {
        code: errCode,
      }
    }

    response
      .status(status)
      .json(jsonRes);
  }
}
