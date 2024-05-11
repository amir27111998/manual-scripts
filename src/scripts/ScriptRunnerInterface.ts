import { Logger } from 'pino';
import { ConfigService } from '../config/ConfigService';

export abstract class ScriptRunnerInterface<T = void | unknown> {
  readonly logger: Logger;
  readonly configService: ConfigService;
  abstract scriptName: string;

  constructor(logger: Logger, configService: ConfigService) {
    this.logger = logger;
    this.configService = configService;
  }

  abstract runner(): T | Promise<T>;
}
