import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
// eslint-disable-next-line prettier/prettier
import { TypeOrmModule } from '@nestjs/typeorm'
import { FeedPostEntity } from './models/post.entity';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
// eslint-disable-next-line prettier/prettier
export class FeedModule { }
