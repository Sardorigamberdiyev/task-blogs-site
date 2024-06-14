import { Role } from '../common/enums/role.enum';

export interface IUserModel {
	id?: number;
	full_name: string;
	username: string;
	role: Role;
	hash_password?: string;
	created_at?: Date;
}
