import { Role } from '../common/enums/role.enum';
import { UserRole } from '../grpc/genproto/user_service/general_pb';

export function userRoleToRole(userRole: UserRole): Role {
	switch (userRole) {
		case UserRole.ADMIN:
			return Role.ADMIN;
		case UserRole.AUTHOR:
			return Role.AUTHOR;
		case UserRole.GUEST:
			return Role.GUEST;
	}
}
