import { FindOptionsWhere } from 'typeorm';
import { PaginationType } from '../common/types/pagination.type';
import { IUserModel } from '../database/schemas/user.schema';
import { IPostModel } from './post.model';

export interface IPostsRepository {
	createOrUpdateOne(post: IPostModel): Promise<Required<IPostModel>>;
	deleteOne(post: Required<IPostModel>): Promise<Required<Omit<IPostModel, 'id'>>>;
	findById(id: number): Promise<FindPostSelect | null>;
	findOne(where?: FindOptionsWhere<IPostModel>): Promise<Required<IPostModel> | null>;
	findAllWithCount(
		pagination: PaginationType,
		where?: FindOptionsWhere<IPostModel> | FindOptionsWhere<IPostModel>[]
	): Promise<FindPostSelectWithCount>;
}

export type FindPostSelect = Required<
	Omit<IPostModel, 'author_id'> & {
		author_id: Pick<Required<IUserModel>, 'id' | 'full_name' | 'username'>;
	}
>;
export type FindPostSelectWithCount = {
	posts: FindPostSelect[];
	count: number;
};
