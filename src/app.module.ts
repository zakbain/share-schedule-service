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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(
    { envFilePath: ['.env', '.env.local'] }
  ),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('mongo_uri'),
      dbName: configService.get<string>('mongo_dbname')
    }),
    inject: [ConfigService]
  }),
    ScheduleModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }),
    UserModule,
    SpaceModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
