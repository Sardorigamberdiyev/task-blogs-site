import { sign, verify } from 'jsonwebtoken';
import { IConfigService } from '../config/config.service.interface';
import { IJwtService } from './jwt.service.interface';

export class JwtService implements IJwtService {
	private secret: string;
	private expiresIn?: string;

	constructor(configService: IConfigService) {
		this.secret = configService.get('JWT_SECRET');
		this.expiresIn = configService.get('JWT_EXPIRES_IN');
	}

	public sign(payload: object) {
		return new Promise<string>((resolve, reject) => {
			sign(payload, this.secret, { expiresIn: this.expiresIn }, (error, token) => {
				if (error || !token) return reject(error || new Error('Failed to get token'));

				resolve(token);
			});
		});
	}

	public verify<P extends object | string>(token: string) {
		return new Promise<P>((resolve, reject) => {
			verify(token, this.secret, (error, payload) => {
				if (error || payload === undefined) {
					return reject(error || new Error('Error when checking by token'));
				}
				resolve(payload as P);
			});
		});
	}
}
