import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
import { IConfigService } from '../config/config.service.interface';
import { IDatabaseService } from './database.service.interface';
import { PostSchema } from './schemas/post.schema';
import { UserSchema } from './schemas/user.schema';
import { PostCommentSchema } from './schemas/post-comment.schema';

export class DatabaseService implements IDatabaseService {
	private static instance: DatabaseService;
	private dataSource: DataSource;

	private constructor(configService: IConfigService) {
		this.dataSource = new DataSource({
			type: 'postgres',
			host: configService.get('DB_HOST'),
			port: +configService.get('DB_PORT'),
			username: configService.get('DB_USER'),
			password: configService.get('DB_PASSWORD'),
			database: configService.get('DB_NAME'),
			entities: [UserSchema, PostSchema, PostCommentSchema],
			synchronize: true,
		});
	}

	public getRepository<E extends ObjectLiteral>(entity: EntityTarget<E>) {
		return this.dataSource.getRepository<E>(entity);
	}

	public async run() {
		await this.dataSource.initialize();
	}

	public static getInstance(configService: IConfigService) {
		return this.instance || new DatabaseService(configService);
	}
}
