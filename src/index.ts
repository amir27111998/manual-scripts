import { ConfigService } from './config/ConfigService';
import { LoggerService } from './logger/LoggerService';
import { DemoScript } from './scripts/DemoScript';
import { ScriptRunnerInterface } from './scripts/ScriptRunnerInterface';

async function main(): Promise<void> {
  const configService = new ConfigService();
  const logger = new LoggerService(configService).getLogger();
  logger.info(`Configuration And Logger Initialized`);

  async function runRunner(script: ScriptRunnerInterface): Promise<void> {
    try {
      logger.info(`Running Script: ${script.scriptName}`);
      await script.runner();
      logger.info(`Script Completed`);
    } catch (error) {
      logger.fatal(error, `Error Running Script.`);
    }
  }

  await runRunner(new DemoScript(logger, configService));
}

main();
