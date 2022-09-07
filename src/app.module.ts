import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@mongo:27017'), ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
