import { IPostModel } from '../../libs/models/post.model';

export interface IPostCardListProps {
	posts: IPostModel[];
	handleAfterDelete?: () => void;
	handleAfterEdit?: () => void;
}
