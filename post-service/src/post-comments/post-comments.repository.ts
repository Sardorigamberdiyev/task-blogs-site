import { FindOptionsWhere, Repository } from 'typeorm';
import {
	FindPostCommentSelect,
	FindPostCommentSelectWithCount,
	IPostCommentsRepository,
} from './post-comments.repository.interface';
import { IPostCommentModel } from './post-comment.model';
import { IDatabaseService } from '../database/database.service.interface';
import { PostCommentSchema } from '../database/schemas/post-comment.schema';
import { PaginationType } from '../common/types/pagination.type';

export class PostCommentsRepository implements IPostCommentsRepository {
	private readonly repository: Repository<Required<IPostCommentModel>>;

	constructor(databaseService: IDatabaseService) {
		this.repository = databaseService.getRepository(PostCommentSchema) as Repository<
			Required<IPostCommentModel>
		>;
	}

	public createOrUpdateOne(postComment: IPostCommentModel) {
		return this.repository.save(postComment);
	}

	public deleteOne(postComment: Required<IPostCommentModel>) {
		return this.repository.remove(postComment);
	}

	public async findAllWithCount(
		{ page, limit }: PaginationType,
		where?: FindOptionsWhere<IPostCommentModel>
	) {
		const skip = (page || 1) * limit - limit;
		const [comments, count] = await this.repository.findAndCount({
			where,
			skip,
			take: limit,
			relations: ['user_id'],
			select: {
				id: true,
				comment: true,
				user_id: {
					id: true,
					full_name: true,
					username: true,
					hash_password: false,
					role: false,
					created_at: false,
				},
				post_id: false,
				created_at: true,
			},
		});

		return { comments, count } as FindPostCommentSelectWithCount;
	}

	public findById(id: number) {
		return this.repository.findOne({
			where: { id },
			select: {
				id: true,
				comment: true,
				user_id: {
					id: true,
					full_name: true,
					username: true,
					hash_password: false,
					role: false,
					created_at: false,
				},
				post_id: false,
				created_at: true,
			},
			relations: ['user_id'],
		}) as Promise<FindPostCommentSelect>;
	}

	public findOne(where?: FindOptionsWhere<IPostCommentModel>) {
		return this.repository.findOne({ where });
	}
}
