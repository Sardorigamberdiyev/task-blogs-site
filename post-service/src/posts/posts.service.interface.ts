import { BaseResponseList } from '../common/types/base.response-list.type';
import { PaginationType } from '../common/types/pagination.type';
import { IPostModel } from './post.model';
import { FindPostSelect } from './posts.repository.interface';

export interface IPostsService {
	getPosts(query: IGetPostsQuery): Promise<BaseResponseList<FindPostSelect>>;
	getPostById(id: number): Promise<FindPostSelect>;
	createPost(data: ICreatePostData): Promise<Required<IPostModel>>;
	updatePost(id: number, data: IUpdatePostData): Promise<Required<IPostModel>>;
	deletePost(id: number): Promise<Required<Omit<IPostModel, 'id'>>>;
}

export interface ICreatePostData
	extends Pick<IPostModel, 'author_id' | 'title' | 'description' | 'image_url'> {}
export interface IUpdatePostData extends Pick<IPostModel, 'title' | 'description' | 'image_url'> {}
export interface IGetPostsQuery extends PaginationType {
	author_id?: number;
	search?: string;
}
