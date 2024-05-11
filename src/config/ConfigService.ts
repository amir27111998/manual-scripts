import { config, DotenvParseOutput } from 'dotenv';

export enum ConfigKeys {
  AccountingDB = 'ACCOUNTING_DB',
  AccountingDBUser = 'ACCOUNTING_DB_USER',
  AccountingDBPassword = 'ACCOUNTING_DB_PASSWORD',
  AccountingDBHost = 'ACCOUNTING_DB_HOST',
  AccountingDBPort = 'ACCOUNTING_DB_PORT',
  MimsDB = 'MIMS_DB',
  MimsDBUser = 'MIMS_DB_USER',
  MimsDBPassword = 'MIMS_DB_PASSWORD',
  MimsDBHost = 'MIMS_DB_HOST',
  MimsDBPort = 'MIMS_DB_PORT',
  EnableLogging = 'ENABLE_LOGGING',
  MinimumLogLevel = 'MINIMUM_LOG_LEVEL',
  RewriteLogsOnEveryRun = 'REWRITE_LOGS_ON_EVERY_RUN',
}

export class ConfigService {
  envVariables: DotenvParseOutput;

  constructor() {
    const configuration = config().parsed;
    if (!configuration) throw new Error('No environment variables found');
    this.envVariables = configuration;
  }

  get(key: ConfigKeys): string {
    const envVarValue = this.envVariables[key];
    if (!envVarValue) throw new Error(`Missing environment variable: ${key}`);
    return envVarValue;
  }
}
