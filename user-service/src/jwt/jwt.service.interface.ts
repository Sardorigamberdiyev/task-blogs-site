export interface IJwtService {
	sign(payload: object): Promise<string>;
	verify<P extends object | string>(token: string): Promise<P>;
}
