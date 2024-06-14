import { EntitySchema } from 'typeorm';
import { Role } from '../../common/enums/role.enum';

export interface IUserModel {
	id?: number;
	full_name: string;
	username: string;
	role: Role;
	hash_password?: string;
	created_at?: Date;
}

export const UserSchema = new EntitySchema<IUserModel>({
	name: 'user',
	synchronize: false,
	columns: {
		id: {
			type: 'int',
			generated: 'increment',
			primary: true,
		},
		full_name: {
			type: 'varchar',
			length: 64,
		},
		username: {
			type: 'varchar',
			length: 32,
		},
		role: {
			type: 'enum',
			enum: Role,
		},
		hash_password: {
			type: 'text',
		},
		created_at: {
			type: 'timestamptz',
			createDate: true,
		},
	},
});
