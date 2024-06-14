import { BaseResponseList } from '../common/types/base.response-list.type';
import { PaginationType } from '../common/types/pagination.type';
import { IUserModel } from './user.model';
import { FindUserSelect } from './users.repository.interface';

export interface IUsersService {
	getUsers(queryData: IGetUsersQueryData): Promise<BaseResponseList<FindUserSelect>>;
	validateUser(data: IValidateUserData): Promise<Required<IUserModel> | null>;
	createUser(data: ICreateUserData): Promise<Required<IUserModel>>;
	getUserById(userId: number): Promise<Required<IUserModel>>;
	isExistAdmin(): Promise<boolean>;
}

export interface ICreateUserData extends Pick<IUserModel, 'full_name' | 'username' | 'role'> {
	password: string;
}
export interface IValidateUserData extends Pick<IUserModel, 'username'> {
	password: string;
}
export interface IGetUsersQueryData extends PaginationType {
	search?: string;
}
