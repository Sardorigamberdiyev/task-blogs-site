import { IUserModel } from '../database/schemas/user.schema';
import { IPostModel } from './post.model';

export class PostEntity implements IPostModel {
	id?: number | undefined;
	author_id: number | IUserModel;
	title: string;
	description: string;
	image_url: string;
	last_updated_at?: Date | undefined;
	created_at?: Date | undefined;

	constructor(post: IPostModel) {
		this.id = post.id;
		this.author_id = post.author_id;
		this.title = post.title;
		this.description = post.description;
		this.image_url = post.image_url;
		this.last_updated_at = post.last_updated_at;
		this.created_at = post.created_at;
	}

	public updateData(setUpdate: Partial<Pick<IPostModel, 'title' | 'description' | 'image_url'>>) {
		this.title = setUpdate.title ?? this.title;
		this.description = setUpdate.description ?? this.description;
		this.image_url = setUpdate.image_url ?? this.image_url;
	}
}
