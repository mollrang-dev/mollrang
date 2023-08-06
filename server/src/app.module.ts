import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareLibraryModule } from '@app/share-library';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserModule } from './user/user.module';
import { ResponseTimeLogMiddleware } from '@app/share-library/common/middleware/response-time-log.middleware';

@Module({
  imports: [ShareLibraryModule, QuizzesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(ResponseTimeLogMiddleware).forRoutes('/');
  }
}
