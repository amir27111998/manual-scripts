import { Logger, pino, TransportTargetOptions } from 'pino';
import { ConfigKeys, ConfigService } from '../config/ConfigService';

export class LoggerService {
  private logger: Logger;

  constructor(protected readonly configService: ConfigService) {
    const pinoTransports: TransportTargetOptions[] = [
      {
        target: 'pino-pretty',
        options: { destination: 1 },
        level: configService.get(ConfigKeys.MinimumLogLevel) ?? 'debug',
      },
    ];
    if (configService.get(ConfigKeys.EnableLogging)) {
      pinoTransports.push({
        target: 'pino/file',
        options: {
          destination: 'logs/app.log',
          mkdir: true,
          append: !(
            configService.get(ConfigKeys.RewriteLogsOnEveryRun) === 'true'
          ),
        },
        level: 'trace',
      });
    }
    this.logger = pino({
      transport: { targets: pinoTransports },
      level: configService.get(ConfigKeys.MinimumLogLevel) ?? 'debug',
    });
  }

  public getLogger(): Logger {
    return this.logger;
  }
}
