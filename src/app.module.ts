import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from './schedule/schedule.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { SpaceModule } from './space/space.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017', { dbName: 'schedule' }),
    ScheduleModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    autoSchemaFile: false,
  }),
  UserModule,
  SpaceModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
