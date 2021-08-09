import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IPost } from '../model/post.interface';
import { PostService } from '../service/post.service';

@Controller('post')
export class PostController {
  constructor(
    private postService: PostService
  ){}

  @Post()
  async create(@Body() post:IPost): Promise<IPost>{
    return this.postService.createPost(post);
  }

  @Get(':id')
  async item(@Param('id') id:number): Promise<IPost>{
    return this.postService.item(id);
  }
  
}
