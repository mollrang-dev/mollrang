import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ShareLibraryService } from './share-library.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  CACHE_CONFIG,
  CONFIG_OPTION,
  THROTTLER_CONFIG,
  TYPEORM_OPTION,
} from '@app/share-library/common/setting';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_OPTION()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TYPEORM_OPTION,
    }),
    CacheModule.register(CACHE_CONFIG),
    ThrottlerModule.forRoot(THROTTLER_CONFIG),
  ],
  providers: [ShareLibraryService],
  exports: [ShareLibraryService],
})
export class ShareLibraryModule {}
