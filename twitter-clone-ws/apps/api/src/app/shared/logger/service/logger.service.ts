import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService {
    constructor() { }

    log(message: string): void {
        Logger.log(message);
    }
}
