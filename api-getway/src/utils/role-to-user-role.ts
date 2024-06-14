import { Role } from '../common/enums/role.enum';
import { UserRole } from '../grpc/genproto/user_service/general_pb';

export function roleToUserRole(role: Role): UserRole {
	switch (role) {
		case Role.ADMIN:
			return UserRole.ADMIN;
		case Role.AUTHOR:
			return UserRole.AUTHOR;
		case Role.GUEST:
			return UserRole.GUEST;
	}
}
