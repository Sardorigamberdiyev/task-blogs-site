export interface IModalProps {
	title: string;
	className?: string;
	show?: boolean;
	handleClose?: () => void;
	handleSave?: () => void;
}
