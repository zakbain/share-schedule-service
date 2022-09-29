import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { Space, SpaceSchema } from './schemas/space.schema';
import { SpaceController } from './space.controller';
import { SpaceService } from './space.service';
import { SpaceResolver } from './space.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Space.name, schema: SpaceSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [SpaceController],
  providers: [SpaceService, SpaceResolver, UserService]
})
export class SpaceModule { }
