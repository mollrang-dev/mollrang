import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareLibraryModule } from '@app/share-library';
import { QuizzesModule } from './quizzes/quizzes.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ShareLibraryModule, QuizzesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
