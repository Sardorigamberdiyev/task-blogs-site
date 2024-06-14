import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';

export interface IDatabaseService {
	getRepository<E extends ObjectLiteral>(entity: EntityTarget<E>): Repository<E>;
	run(): Promise<void>;
}
