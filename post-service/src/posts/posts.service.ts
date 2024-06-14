import { ILike } from 'typeorm';
import { IPostsRepository } from './posts.repository.interface';
import {
	ICreatePostData,
	IGetPostsQuery,
	IPostsService,
	IUpdatePostData,
} from './posts.service.interface';
import { GrpcError } from '../errors/grpc.error';
import { status } from '@grpc/grpc-js';
import { PostEntity } from './post.entity';

export class PostsService implements IPostsService {
	constructor(private readonly postsRepository: IPostsRepository) {}

	public async getPosts(query: IGetPostsQuery) {
		const { search, page, limit, author_id } = query;

		const byAuthor = author_id ? { author_id } : {};
		const where = search?.length
			? [
					{ title: ILike(`%${search}%`), ...byAuthor },
					{ description: ILike(`%${search}%`), ...byAuthor },
			  ]
			: byAuthor;
		const { posts, count } = await this.postsRepository.findAllWithCount(
			{ page, limit },
			where
		);

		const afterDot = count % limit;
		const pageTrunc = Math.trunc(count / limit);
		const total_pages = afterDot !== 0 ? pageTrunc + 1 : pageTrunc;

		return {
			page,
			total_pages,
			total_results: count,
			results: posts,
		};
	}
	public async getPostById(id: number) {
		const post = await this.postsRepository.findById(id);

		if (!post) {
			throw new GrpcError('Post by id not found', status.NOT_FOUND);
		}

		return post;
	}
	public async createPost(data: ICreatePostData) {
		const { author_id, title } = data;
		const post = await this.postsRepository.findOne({ author_id, title });

		if (post) {
			throw new GrpcError('Post with title already exists', status.ALREADY_EXISTS);
		}

		return this.postsRepository.createOrUpdateOne(new PostEntity(data));
	}

	public async updatePost(id: number, data: IUpdatePostData) {
		const post = await this.postsRepository.findOne({ id });

		if (!post) {
			throw new GrpcError('Post by id not found', status.NOT_FOUND);
		}

		const postEntity = new PostEntity(post);
		postEntity.updateData(data);

		return this.postsRepository.createOrUpdateOne(postEntity);
	}

	public async deletePost(id: number) {
		const post = await this.postsRepository.findOne({ id });

		if (!post) {
			throw new GrpcError('Post by id not found or already deleted', status.INVALID_ARGUMENT);
		}

		const postEntity = new PostEntity(post) as Required<PostEntity>;

		return this.postsRepository.deleteOne(postEntity);
	}
}
