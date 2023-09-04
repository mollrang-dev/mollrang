import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ResponseTimeLogMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: any, res: any, next: (error?: any) => void) {
    const start = Date.now();
    res.on('finish', () => {
      const end = Date.now();
      const message = 'ResponseTime: ' + String(end - start) + 'ms';
      this.logger.log(message);
    });
    next();
  }
}
