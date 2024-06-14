import { Role } from '../enums/role.enum';

export interface IUserModel {
	id: number;
	fullName: string;
	username: string;
	role: Role;
}
