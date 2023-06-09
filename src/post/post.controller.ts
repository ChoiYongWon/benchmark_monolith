import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/healthcheck')
  getHello(): string {
    return this.postService.getHello();
  }

  @Get()
  getPost(@Query() query) {
    return this.postService.getPost(query.post_id);
  }
}
