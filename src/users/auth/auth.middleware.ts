import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

import { Response, Request
} from 'express';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const {
      authorization
    } = req.headers

    if (!authorization) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED)
    }
    next();
  }
}
