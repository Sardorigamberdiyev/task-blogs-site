import { FindOptionsWhere } from 'typeorm';
import { PaginationType } from '../common/types/pagination.type';
import { IUserModel } from './user.model';

export interface IUsersRepository {
	createOne(user: IUserModel): Promise<Required<IUserModel>>;
	findOne(
		where?: Partial<Pick<IUserModel, 'username' | 'id' | 'role'>>
	): Promise<Required<IUserModel> | null>;
	findAllWithCount(
		pagination: PaginationType,
		where?: FindOptionsWhere<IUserModel> | FindOptionsWhere<IUserModel>[]
	): Promise<FindUserSelectWithCount>;
}

export type FindUserSelect = Required<Omit<IUserModel, 'hash_password'>>;
export type FindUserSelectWithCount = {
	users: FindUserSelect[];
	count: number;
};
