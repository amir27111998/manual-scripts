import { Logger } from 'pino';
import { ScriptRunnerInterface } from './ScriptRunnerInterface';
import { ConfigService } from '../config/ConfigService';

export class DemoScript extends ScriptRunnerInterface<void> {
  override scriptName = 'DemoScript';

  constructor(logger: Logger, configService: ConfigService) {
    super(logger, configService);
  }

  override async runner(): Promise<void> {
    this.logger.debug('DemoScript is running');
  }
}
