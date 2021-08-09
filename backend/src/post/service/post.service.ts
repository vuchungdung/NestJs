import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../model/post.entity';
import { IPost } from '../model/post.interface';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ){}

  async createPost(post: IPost):Promise<IPost>{
    return this.postRepository.save(post);
  }

  async item(id: number):Promise<IPost>{
    return this.postRepository.findOne(id);
  }
}
