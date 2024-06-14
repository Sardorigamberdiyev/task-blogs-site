import { status } from '@grpc/grpc-js';
import { GrpcError } from '../errors/grpc.error';
import { UserEntity } from './user.entity';
import { IUsersRepository } from './users.repository.interface';
import {
	ICreateUserData,
	IValidateUserData,
	IUsersService,
	IGetUsersQueryData,
} from './users.service.interface';
import { Role } from '../common/enums/role.enum';
import { ILike } from 'typeorm';

export class UsersService implements IUsersService {
	constructor(private readonly usersRepository: IUsersRepository) {}

	public async getUsers({ page, limit, search }: IGetUsersQueryData) {
		const where = search?.length
			? [{ full_name: ILike(`%${search}%`) }, { username: ILike(`%${search}%`) }]
			: undefined;

		const { users, count } = await this.usersRepository.findAllWithCount(
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
			results: users,
		};
	}

	public async createUser(data: ICreateUserData) {
		const { username, password, ...restData } = data;
		const candidate = await this.usersRepository.findOne({ username });
		if (candidate) {
			throw new GrpcError('User already exist', status.ALREADY_EXISTS);
		}
		const userEntity = new UserEntity({ username, ...restData });
		await userEntity.setHashPassword(password);
		return this.usersRepository.createOne(userEntity);
	}

	public async validateUser(data: IValidateUserData) {
		const { username, password } = data;
		const user = await this.usersRepository.findOne({ username });

		if (!user) return null;

		const userEntity = new UserEntity(user);
		const isPasswordMatch = await userEntity.comparePassword(password);

		if (!isPasswordMatch) return null;

		return user;
	}

	public async getUserById(userId: number) {
		const user = await this.usersRepository.findOne({ id: userId });

		if (!user) {
			throw new GrpcError('User by id not found', status.NOT_FOUND);
		}

		return user;
	}

	public async isExistAdmin() {
		const admin = await this.usersRepository.findOne({ role: Role.ADMIN });
		return !!admin;
	}
}
