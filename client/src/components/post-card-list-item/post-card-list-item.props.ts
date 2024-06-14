import { IPostModel } from '../../libs/models/post.model';

export interface IPostCardListItemProps {
	post: IPostModel;
	handleAfterDelete?: () => void;
	handleAfterEdit?: () => void;
}
