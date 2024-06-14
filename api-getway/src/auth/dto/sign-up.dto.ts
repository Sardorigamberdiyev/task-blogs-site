import { IsAlphanumeric, IsEnum, IsString, MinLength } from 'class-validator';
import { Role } from '../../common/enums/role.enum';

export class SignUpDTO {
	@IsString()
	fullName!: string;

	@IsAlphanumeric()
	@MinLength(3)
	username!: string;

	@IsString()
	@MinLength(6)
	password!: string;

	@IsEnum({ author: Role.AUTHOR, guest: Role.GUEST })
	role!: Role;
}
