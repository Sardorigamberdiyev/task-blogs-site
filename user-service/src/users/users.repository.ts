import { FindOptionsWhere, Repository } from 'typeorm';
import { IUsersRepository } from './users.repository.interface';
import { IUserModel } from './user.model';
import { IDatabaseService } from '../database/database.service.interface';
import { UserSchema } from '../database/schemas/user.schema';
import { PaginationType } from '../common/types/pagination.type';

export class UsersRepository implements IUsersRepository {
	private repository: Repository<Required<IUserModel>>;

	constructor(databaseService: IDatabaseService) {
		this.repository = databaseService.getRepository(UserSchema) as Repository<
			Required<IUserModel>
		>;
	}

	public createOne(user: IUserModel) {
		return this.repository.save(user);
	}

	public findOne(where?: Partial<Pick<IUserModel, 'id' | 'username' | 'role'>>) {
		return this.repository.findOne({ where });
	}

	public async findAllWithCount(
		{ page, limit }: PaginationType,
		where?: FindOptionsWhere<IUserModel> | FindOptionsWhere<IUserModel>[]
	) {
		const skip = (page || 1) * limit - limit;
		const [users, count] = await this.repository.findAndCount({
			where,
			skip,
			take: limit,
			select: {
				id: true,
				full_name: true,
				username: true,
				role: true,
				hash_password: false,
				created_at: true,
			},
			order: {
				created_at: 'DESC',
			},
		});

		return { users, count };
	}
}
