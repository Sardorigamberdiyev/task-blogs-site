import { FindOptionsWhere, Repository } from 'typeorm';
import {
	FindPostSelect,
	FindPostSelectWithCount,
	IPostsRepository,
} from './posts.repository.interface';
import { IPostModel } from './post.model';
import { IDatabaseService } from '../database/database.service.interface';
import { PostSchema } from '../database/schemas/post.schema';
import { PaginationType } from '../common/types/pagination.type';

export class PostsRepository implements IPostsRepository {
	private readonly repository: Repository<Required<IPostModel>>;

	constructor(databaseService: IDatabaseService) {
		this.repository = databaseService.getRepository(PostSchema) as Repository<
			Required<IPostModel>
		>;
	}

	public createOrUpdateOne(post: IPostModel) {
		return this.repository.save(post);
	}

	public deleteOne(post: Required<IPostModel>) {
		return this.repository.remove(post);
	}

	public async findAllWithCount(
		{ page, limit }: PaginationType,
		where?: FindOptionsWhere<IPostModel> | FindOptionsWhere<IPostModel>[]
	) {
		const skip = (page || 1) * limit - limit;
		const [posts, count] = await this.repository.findAndCount({
			where,
			skip,
			take: limit,
			relations: ['author_id'],
			select: {
				id: true,
				title: true,
				author_id: {
					id: true,
					username: true,
					full_name: true,
					hash_password: false,
					role: false,
					created_at: false,
				},
				description: true,
				image_url: true,
				last_updated_at: true,
				created_at: true,
			},
			order: {
				created_at: 'DESC',
			},
		});
		return { posts, count } as FindPostSelectWithCount;
	}

	public findOne(where?: FindOptionsWhere<IPostModel>) {
		return this.repository.findOne({ where });
	}

	public findById(id: number) {
		return this.repository.findOne({
			where: { id },
			relations: ['author_id'],
			select: {
				id: true,
				title: true,
				author_id: {
					id: true,
					username: true,
					full_name: true,
					hash_password: false,
					role: false,
					created_at: false,
				},
				description: true,
				image_url: true,
				last_updated_at: true,
				created_at: true,
			},
		}) as Promise<FindPostSelect | null>;
	}
}
