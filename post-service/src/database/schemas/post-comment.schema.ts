import { EntitySchema } from 'typeorm';
import { IPostCommentModel } from '../../post-comments/post-comment.model';

export const PostCommentSchema = new EntitySchema<IPostCommentModel>({
	name: 'post_comment',
	columns: {
		id: {
			type: 'int',
			generated: 'increment',
			primary: true,
		},
		comment: {
			type: 'varchar',
			length: 128,
		},
		user_id: {
			type: 'int',
			nullable: false,
		},
		post_id: {
			type: 'int',
			nullable: false,
		},
		created_at: {
			type: 'timestamptz',
			createDate: true,
		},
	},
	relations: {
		post_id: {
			type: 'many-to-one',
			target: 'post',
			joinColumn: { name: 'post_id' },
			onDelete: 'CASCADE',
		},
		user_id: {
			type: 'many-to-one',
			target: 'user',
			joinColumn: { name: 'user_id' },
		},
	},
});
