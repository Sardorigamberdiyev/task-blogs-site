import { EntitySchema } from 'typeorm';
import { Role } from '../../common/enums/role.enum';
import { IUserModel } from '../../users/user.model';

export const UserSchema = new EntitySchema<IUserModel>({
	name: 'user',
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
