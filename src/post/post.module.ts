import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [CommentModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
