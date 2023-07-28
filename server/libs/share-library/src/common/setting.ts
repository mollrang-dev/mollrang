import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const CONFIG_OPTION = () => {
  const env = process.env.NODE_ENV || 'development';
  let envFilePath = '.env';
  switch (env) {
    case 'development': {
      envFilePath = '.env.dev';
      break;
    }
    case 'production': {
      envFilePath = '.env.prod';
      break;
    }
    case 'test': {
      envFilePath = '.env.test';
      break;
    }
    default: {
      envFilePath = '.env.local';
      break;
    }
  }
  return {
    isGlobal: true,
    envFilePath: envFilePath,
  };
};

export const TYPEORM_OPTION = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbHost = configService.get<string>('DB_HOST');
  const dbPort = configService.get<number>('DB_PORT');
  const dbUsername = configService.get<string>('DB_USERNAME');
  const dbPassword = configService.get<string>('DB_PASSWORD');
  const dbDatabase = configService.get<string>('DB_DATABASE');
  return {
    type: 'mysql',
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    entities: [],
  };
};

export const CACHE_CONFIG = {
  ttl: 3000,
  max: 10,
  isGlobal: true,
};

export const THROTTLER_CONFIG = {
  ttl: 1,
  limit: 60,
};
