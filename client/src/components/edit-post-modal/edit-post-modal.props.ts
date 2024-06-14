import { IPostModel } from '../../libs/models/post.model';

export interface IEditPostModalProps {
	post: IPostModel;
	show?: boolean;
	handleClose?: () => void;
	handleAfterEdit?: () => void;
}
