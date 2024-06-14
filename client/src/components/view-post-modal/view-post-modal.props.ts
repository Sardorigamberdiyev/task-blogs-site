import { IPostModel } from '../../libs/models/post.model';

export interface IViewPostModalProps {
	post: IPostModel;
	show?: boolean;
	handleClose?: () => void;
	handleAfterSave?: () => void;
}
