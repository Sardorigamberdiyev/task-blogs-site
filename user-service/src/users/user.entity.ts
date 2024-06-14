import { Role } from '../common/enums/role.enum';
import { IUserModel } from './user.model';
import { compare, hash } from 'bcrypt';

export class UserEntity implements IUserModel {
	id?: number;
	full_name: string;
	username: string;
	role: Role;
	hash_password?: string;
	created_at?: Date;

	constructor(user: IUserModel) {
		this.id = user.id;
		this.full_name = user.full_name;
		this.username = user.username;
		this.role = user.role;
		this.hash_password = user.hash_password;
		this.created_at = user.created_at;
	}

	public async setHashPassword(password: string) {
		this.hash_password = await hash(password, 12);
	}

	public comparePassword(password: string) {
		return compare(password, this.hash_password ?? '');
	}
}
