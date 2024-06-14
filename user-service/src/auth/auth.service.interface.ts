import { IUserModel } from '../users/user.model';
import { ICreateUserData, IValidateUserData } from '../users/users.service.interface';

export interface IAuthService {
	signUp(data: ICreateUserData): Promise<{ accessToken: string; user: Required<IUserModel> }>;
	signIn(data: IValidateUserData): Promise<{ accessToken: string; user: Required<IUserModel> }>;
}
