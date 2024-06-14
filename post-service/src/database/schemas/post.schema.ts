import { EntitySchema } from 'typeorm';
import { IPostModel } from '../../posts/post.model';

export const PostSchema = new EntitySchema<IPostModel>({
	name: 'post',
	columns: {
		id: {
			type: 'int',
			generated: 'increment',
			primary: true,
		},
		title: {
			type: 'varchar',
			length: 32,
		},
		description: {
			type: 'text',
		},
		image_url: {
			type: 'text',
		},
		author_id: {
			type: 'int',
			nullable: false,
		},
		last_updated_at: {
			type: 'timestamptz',
			updateDate: true,
		},
		created_at: {
			type: 'timestamptz',
			createDate: true,
		},
	},
	relations: {
		author_id: {
			type: 'many-to-one',
			target: 'user',
			joinColumn: { name: 'author_id' },
		},
	},
});
